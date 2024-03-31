import { NextRequest, NextResponse } from 'next/server'
import { serverAuth } from '@/shared/lib'

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { currentUser } = await serverAuth()

    return Response.json(
      {
        ...currentUser,
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
