import { commonGet } from '@/app/api/study/book-reading/common-api'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  return await commonGet(`quiz/ebook-speak`, request.nextUrl.search)
}
