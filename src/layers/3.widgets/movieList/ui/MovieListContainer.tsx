'use client'

import { useQuery } from '@tanstack/react-query'
import { MovieList } from './MovieList'
import { getMovieListData } from '@/features/movie'

export const MovieListContainer = () => {
  const { data: movies = [] } = useQuery<Movie[]>({
    queryKey: ['movieList'],
    queryFn: getMovieListData,
  })

  return (
    <div className="pb-40">
      <MovieList data={movies} title="Trending Now" />
    </div>
  )
}
