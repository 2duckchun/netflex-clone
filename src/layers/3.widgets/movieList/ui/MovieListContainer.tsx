'use client'

import { useQuery } from '@tanstack/react-query'
import { MovieList } from './MovieList'
import { fetcher } from '@/layers/6.shared/api'
import { movieKeys } from '@/layers/6.shared/query-key'

export const MovieListContainer = () => {
  const { data: movies = [] } = useQuery<Movie[]>({
    queryKey: [movieKeys.movieList()],
    queryFn: fetcher('/api/movie/list', { method: 'GET' }),
  })

  const { data: favoriteMovies = [] } = useQuery<Movie[]>({
    queryKey: [movieKeys.favoriteMovieList()],
    queryFn: fetcher('/api/movie/favorites', { method: 'GET' }),
  })

  return (
    <div className="pb-40">
      <MovieList data={movies} title="Trending Now" />
      <MovieList data={favoriteMovies} title="My List" />
    </div>
  )
}
