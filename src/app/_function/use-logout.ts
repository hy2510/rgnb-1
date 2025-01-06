import { useRouter } from 'next/navigation'
import { useFetchSignout } from '@/client/store/account/signout/hook'
import SITE_PATH from '../site-path'

export default function useLogout() {
  const router = useRouter()
  const { fetch: logoutFetch } = useFetchSignout()
  const onLogout = () => {
    logoutFetch({
      callback: (data) => {
        if (data) {
          router.replace(SITE_PATH.ACCOUNT.SIGN_IN)
        }
      },
    })
  }

  return onLogout
}
