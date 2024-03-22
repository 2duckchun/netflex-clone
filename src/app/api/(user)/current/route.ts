import bcrypt from 'bcrypt'
import prismadb from '@/layers/6.shared/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'
import serverAuth from '@/layers/6.shared/lib/serverAuth'

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { currentUser } = await serverAuth(req)

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
