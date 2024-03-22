import bcrypt from 'bcrypt'
import prismadb from '@/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'
import serverAuth from '@/lib/serverAuth'

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
