import { NextRequest, NextResponse } from 'next/server'
import { serverAuth } from '@/shared/lib'
import { prismadb } from '@/shared/lib/prismadb'

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { currentUser } = await serverAuth()
    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser.favoriteIds,
        },
      },
    })
    return Response.json(favoriteMovies, { status: 200 })
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
