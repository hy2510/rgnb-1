'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {
  useStaffInfoFlagLogin,
  useStudentInfoFlagLogin,
} from '@/client/store/student/info/selector'
import { useApplicationType } from '../_context/AppContext'
import SITE_PATH, { STAFF_PATH } from '../site-path'

export default function Page() {
  const router = useRouter()
  const appType = useApplicationType()
  const loginStatus = useStudentInfoFlagLogin()
  const staffLoginStatus = useStaffInfoFlagLogin()

  useEffect(() => {
    if (staffLoginStatus === 'off') {
      if (appType === 'app') {
        if (loginStatus === 'on') {
          router.replace(SITE_PATH.LESSON.MAIN)
          console.log('app - on - ', 'home/main')
        } else if (loginStatus === 'off') {
          router.replace(SITE_PATH.ACCOUNT.SIGN_IN)
          console.log('app - off - ', 'account-list')
        }
      } else {
        if (loginStatus === 'on') {
          router.replace(SITE_PATH.LESSON.MAIN)
          console.log('not unknown - ', 'home/main')
        } else if (loginStatus === 'off') {
          router.replace(SITE_PATH.ACCOUNT.SIGN_IN)
          console.log('app - off - ', 'account-list')
        }
      }
    } else if (staffLoginStatus === 'on' && loginStatus !== 'on') {
      router.replace(STAFF_PATH.MAIN)
      console.log('staff on - off', 'staff/main')
    }
  }, [appType, router, loginStatus, staffLoginStatus])

  return <div></div>
}
