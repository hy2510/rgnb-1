import { getCustomerWithHeader } from '@/authorization/server/nextjsHeaderCustomer'
import { NextRequest } from 'next/server'
import Home from '@/repository/server/home'
import { RouteResponse, executeRequestAction } from '../../../_util'

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ id: string }> },
) {
  const params = await props.params
  const customer = await getCustomerWithHeader()
  if (!customer) {
    return RouteResponse.invalidCustomerToken()
  }

  const boardId = params.id

  const [payload, status, error] = await executeRequestAction(
    Home.galleryDetail(customer, { id: boardId }),
  )

  if (error) {
    return RouteResponse.commonError()
  }
  return RouteResponse.response(payload, status)
}
