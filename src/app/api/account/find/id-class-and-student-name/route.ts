import {
  RouteResponse,
  executeRequestAction,
  getBodyParameters,
} from '@/app/api/_util'
import { getCustomerWithHeader } from '@/authorization/server/nextjsHeaderCustomer'
import { NextRequest } from 'next/server'
import Account from '@/repository/server/account'

export async function POST(request: NextRequest) {
  const customer = await getCustomerWithHeader()
  if (!customer) {
    return RouteResponse.invalidCustomerToken()
  }

  const parameter = await getBodyParameters(
    request,
    'classId',
    'studentName',
    'password',
  )
  const classId = parameter.getString('classId')
  const studentName = parameter.getString('studentName')
  const password = parameter.getString('password')

  const [payload, status, error] = await executeRequestAction(
    Account.findIdWithClassAndStudentName(customer, {
      classId,
      studentName,
      password,
    }),
  )

  if (error) {
    return RouteResponse.commonError()
  }
  return RouteResponse.response(payload, status)
}
