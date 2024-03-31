import { NextRequest, NextResponse } from 'next/server'
import { serverAuth } from '@/shared/lib'
import { prismadb } from '@/shared/lib/prismadb'

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await serverAuth()

    const movies = await prismadb.movie.findMany()
    return Response.json([...movies], { status: 200 })
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
