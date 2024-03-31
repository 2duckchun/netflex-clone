import { NextRequest, NextResponse } from 'next/server'
import { serverAuth } from '@/shared/lib'
import { prismadb } from '@/shared/lib/prismadb'
import { without } from 'lodash'

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { currentUser } = await serverAuth()

    const { movieId } = await req.json()

    const existingMovie = await prismadb.movie.findUnique({
      where: { id: movieId },
    })

    if (!existingMovie) {
      throw new Error('Movie does not exist')
    }

    const user = await prismadb.user.update({
      where: {
        email: currentUser.email || '',
      },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    })

    return Response.json(user, { status: 200 })
  } catch (error) {
    console.error(error)
    return Response.json(
      {
        message: 'An error occurred while processing your request',
      },
      {
        status: 400,
      },
    )
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const { currentUser } = await serverAuth()

    const { movieId } = await req.json()

    const existingMovie = await prismadb.movie.findUnique({
      where: { id: movieId },
    })

    if (!existingMovie) {
      throw new Error('Movie does not exist')
    }

    const updatedFavoriteIds = without(currentUser.favoriteIds, movieId)

    const user = await prismadb.user.update({
      where: {
        email: currentUser.email || '',
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    })

    return Response.json(user, { status: 200 })
  } catch (error) {
    console.error(error)
    return Response.json(
      {
        message: 'An error occurred while processing your request',
      },
      {
        status: 400,
      },
    )
  }
}
