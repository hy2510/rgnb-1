import { useEffect } from 'react'
import repository from '@/repository/client'
import { fetcher } from '../../fetcher-action'
import { useFetchBasicState } from '../../hooks'
import { useStudentReadingUnitAction } from './selector'

export function useOnLoadStudentReadingUnit() {
  const { loading, setLoading, error, setError } = useFetchBasicState(true)
  const { setEarnReadingUnit } = useStudentReadingUnitAction()

  useEffect(() => {
    async function fetching() {
      setLoading(true)
      const res = await fetcher.response(repository.getStudentEarnReadingUnit())

      if (res.isSuccess && res.payload) {
        setEarnReadingUnit(res.payload)
      } else {
        setError(res.error)
      }

      setLoading(false)
    }
    fetching()
    // Deps를 입력하는 경우, 다른 Store 값 변경에 반응하게 되므로 입력하지 않음
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    loading,
    error,
  }
}
