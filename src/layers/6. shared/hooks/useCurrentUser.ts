import useSWR from 'swr'

import fetcher from '@/layers/6. shared/lib/fetcher'

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR(
    '/api/user/current',
    fetcher,
  )

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}

export default useCurrentUser
