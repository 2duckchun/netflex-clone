import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import prismadb from '@/layers/6.shared/lib/prismadb'

export async function getSession() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user?.email) {
    redirect('/auth')
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (!currentUser) {
    throw new Error('Not signed in')
  }

  return currentUser
}

export default getSession
