import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'
import { prismadb } from '@/shared/lib'

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, name, password } = await req.json()
    const existingUser = await prismadb.user.findFirst({
      where: {
        email,
      },
    })

    if (existingUser) {
      return Response.json(
        {
          message: 'User already exists',
        },
        {
          status: 422,
        },
      )
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date(),
      },
    })

    return Response.json(user)
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
