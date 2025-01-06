'use client'

import styled from 'styled-components'
import { useStudentInfoFlagLogin } from '@/client/store/student/info/selector'
import { useThemeColor } from '@/ui/context/StyleContext'
import GFooter from './_header/GFooter'
import GHeader from './_header/GHeader'
import useConnectRefreshToken from './useConnectRefreshToken'

export default function SiteLayoutComponent({
  children,
}: {
  children?: React.ReactNode
}) {
  useConnectRefreshToken()

  const themeColor = useThemeColor()
  const loginStatus = useStudentInfoFlagLogin()

  return (
    <>
      <meta name="theme-color" content={themeColor} />
      {loginStatus === 'on' && <GHeader />}
      {children}
      {loginStatus === 'on' && <GFooter />}
    </>
  )
}
