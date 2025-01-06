'use client'

import useTranslation from '@/localization/client/useTranslations'
import { useEffect, useRef } from 'react'
import LoadingScreen from '@/ui/lottie/LoadingScreen'
import useConnectRefreshToken from '../(site)/useConnectRefreshToken'

export default function Page() {
  //@language 'common'
  const { t } = useTranslation()

  const didMount = useRef(false)

  const onLogout = useConnectRefreshToken()

  useEffect(() => {
    if (didMount.current) return
    didMount.current = true
    onLogout()
  }, [onLogout])

  return (
    <main>
      <div>
        <div>{t('t206')}</div>
        <div>{t('t207')}</div>
      </div>
      <LoadingScreen />
    </main>
  )
}
