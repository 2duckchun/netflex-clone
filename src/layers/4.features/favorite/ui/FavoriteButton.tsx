'use client'

import { fetcher } from '@/layers/6.shared/api'
import { Button } from '@/layers/6.shared/ui'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'

interface FavoriteButtonProps {
  movieId: string
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const queryClient = useQueryClient()

  const { data: currentUser } = useQuery<User>({
    queryKey: ['currentUser'],
    queryFn: fetcher('/api/current'),
  })

  const { mutate: deleteFaviriteMovie } = useMutation({
    mutationFn: fetcher('/api/movie/favorite', {
      method: 'DELETE',
      body: JSON.stringify({ movieId }),
    }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['favoriteMovieList'],
      })
    },
  })

  const { mutate: postFaviriteMovie } = useMutation({
    mutationFn: fetcher('/api/movie/favorite', {
      method: 'POST',
      body: JSON.stringify({ movieId }),
    }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['favoriteMovieList'],
      })
    },
  })

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || []
    return list.includes(movieId)
  }, [movieId, currentUser])

  const toggleFavorite = () => {
    if (isFavorite) {
      deleteFaviriteMovie()
    } else {
      postFaviriteMovie()
    }
  }

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <Button
      onClick={toggleFavorite}
      className="group/item flex size-6 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:border-neutral-300 lg:size-10"
    >
      <Icon className="text-white" size={25} />
    </Button>
  )
}
