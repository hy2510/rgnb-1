import LoginContextProvider from '@/app/_context/LoginContext'
import { use } from 'react'
import PageRoot from './_cpnt/PageRoot'

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { to: getTo } = use(searchParams)
  const to = typeof getTo === 'string' ? getTo : undefined

  return (
    <LoginContextProvider>
      <PageRoot to={to} />
    </LoginContextProvider>
  )
}
