import { NextRequest, NextResponse } from 'next/server'
import { serverAuth } from '@/shared/lib'
import { prismadb } from '@/shared/lib/prismadb'

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await serverAuth()
    const randomMovie = await getRamdonMovie()
    return Response.json(
      {
        ...randomMovie,
      },
      {
        status: 200,
      },
    )
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

const getRamdonMovie = async () => {
  const movieCount = await prismadb.movie.count()
  const randomIndex = Math.floor(Math.random() * movieCount)
  const randomMovie = await prismadb.movie.findFirst({
    take: 1,
    skip: randomIndex,
  })

  return randomMovie
}
