'use client'

import LoginForward from '@/app/_app/LoginForward'
import SITE_PATH from '@/app/site-path'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import LoadingScreen from '@/ui/lottie/LoadingScreen'

export default function Page() {
  const searchParams = useSearchParams()
  const uid = searchParams.get('uid')

  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<boolean | undefined>(undefined)
  const [redirect, setRedirect] = useState('')

  useEffect(() => {
    async function fetching(uid: string) {
      const response = await requestMirageStudent(uid)
      if (response) {
        setLoading(false)
        setRedirect(SITE_PATH.LESSON.MAIN)
      } else {
        setLoading(false)
        setError(true)
      }
    }
    if (uid) {
      fetching(uid)
    } else {
      setLoading(false)
      setError(true)
    }
  }, [uid])

  if (loading) {
    return <LoadingScreen />
  }
  if (error) {
    return (
      <main className="container">
        <div>
          <h2>잘못된 접근입니다.</h2>
          <div style={{ width: '200px', marginTop: '24px' }}>
            <button
              onClick={() => {
                router.replace('/signoff')
              }}>
              나가기
            </button>
          </div>
        </div>
      </main>
    )
  }
  return <>{redirect && <LoginForward to={redirect} />}</>
}

async function requestMirageStudent(studentId: string): Promise<boolean> {
  let success = false

  try {
    const dataFetch = await fetch(`/api/staff/mirage?uid=${studentId}`, {
      method: 'put',
    })
    if (dataFetch.ok) {
      const data = await dataFetch.json()
      success = data.success
    } else {
      success = false
    }
  } catch (error) {
    success = false
  }
  return success
}
