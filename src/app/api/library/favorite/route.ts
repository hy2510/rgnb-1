import {
  RouteResponse,
  executeRequestAction,
  getBodyParameters,
  getParameters,
} from '@/app/api/_util'
import { getAuthorizationWithCookie } from '@/authorization/server/nextjsCookieAuthorization'
import { NextRequest, NextResponse } from 'next/server'
import Export from '@/repository/server/export'
import Library from '@/repository/server/library'
import { searchBook } from '../search-book'

type Status = 'Before' | 'Complete' | 'Fail' | 'All'

export async function GET(request: NextRequest) {
  const authorizationWithCookie = await getAuthorizationWithCookie()
  const token = authorizationWithCookie.getActiveAccessToken()
  if (!token) {
    return RouteResponse.invalidAccessToken()
  }

  const parameter = await getParameters(request, 'status', 'page')
  const pStatus = parameter.getString('status', 'All') as Status
  const page = parameter.getNumber('page', 1)

  return searchBook({
    searchRequest: Library.favorites(token, { status: pStatus, page }),
    downloadRequest: Export.favoriteExcel(token, {
      status: pStatus,
    }),
  })
}

export async function POST(request: NextRequest) {
  const authorizationWithCookie = await getAuthorizationWithCookie()
  const token = authorizationWithCookie.getActiveAccessToken()
  if (!token) {
    return RouteResponse.invalidAccessToken()
  }

  const parameter = await getBodyParameters(request, 'levelRoundIds', 'status')
  const levelRoundIds = parameter.getString('levelRoundIds')
  const [payload, status, addError] = await executeRequestAction(
    Library.addFavorites(token, { levelRoundIds }),
  )
  if (status.status === 400) {
    const extra = JSON.parse(payload.message)
    let message = '도서를 Favorite에 추가할 수 없습니다.'
    if (extra.code === 9) {
      message = 'Favorite에는 200권 까지 추가 가능합니다.'
    }
    return NextResponse.json({ message }, status)
  }
  if (addError) {
    return RouteResponse.commonError()
  }
  return RouteResponse.response(payload, status)
}

export async function DELETE(request: NextRequest) {
  const authorizationWithCookie = await getAuthorizationWithCookie()
  const token = authorizationWithCookie.getActiveAccessToken()
  if (!token) {
    return RouteResponse.invalidAccessToken()
  }

  const parameter = await getParameters(
    request,
    'isAll',
    'levelRoundIds',
    'status',
  )
  const isAll = parameter.getString('isAll', 'N') as 'Y' | 'N'

  if (isAll === 'Y') {
    const [payload, status, error] = await executeRequestAction(
      Library.deleteAllFavorites(token),
    )
    if (error) {
      return RouteResponse.commonError()
    }
    return RouteResponse.response(payload, status)
  } else {
    const levelRoundIds = parameter.getString('levelRoundIds')

    const [payload, status, deleteError] = await executeRequestAction(
      Library.deleteFavorites(token!, { levelRoundIds }),
    )

    if (deleteError) {
      return RouteResponse.commonError()
    }
    return RouteResponse.response(payload, status)
  }
}
