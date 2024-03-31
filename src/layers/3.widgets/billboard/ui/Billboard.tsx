'use client'

import { useQuery } from '@tanstack/react-query'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { fetcher } from '@/layers/6.shared/api'
import { movieKeys } from '@/layers/6.shared/query-key'

export const Billboard = () => {
  const { isLoading, isError, data, error } = useQuery<Movie>({
    queryKey: [movieKeys.random()],
    queryFn: fetcher('/api/movie/random', { method: 'GET' }),
  })

  if (isLoading)
    return <div className="h-[56.25vh] min-h-[500px] bg-black/90"></div>

  if (isError)
    return (
      <div className="h-[56.25vh] min-h-[500px] bg-black/90">
        <p className="text-white">{error.message} tell the develop team</p>
      </div>
    )

  return (
    <div className="relative h-[56.25vh] min-h-[500px]">
      <video
        className="h-[56.25vh] min-h-[500px] w-full object-cover brightness-[60%]"
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        autoPlay
        muted
        loop
      />
      <div className="absolute top-[30%] ml-4 md:top-[40%] md:ml-16">
        <p className="w-1/2 text-xl font-bold text-white drop-shadow-xl md:text-5xl lg:text-6xl">
          {data?.title}
        </p>
        <p className="mt-3 w-[90%] text-[8px] text-white drop-shadow-xl md:mt-8 md:w-4/5 md:text-lg lg:w-1/2">
          {data?.description}
        </p>
        <div className="mt-3 flex flex-row items-center gap-3 md:mt-4">
          <button className="flex w-auto flex-row items-center rounded-md bg-white/30 px-2 py-1 text-xs font-semibold text-white transition hover:bg-white/20 md:px-4 md:py-2 lg:text-lg">
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}
