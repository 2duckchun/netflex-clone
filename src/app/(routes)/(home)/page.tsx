import SignOutButton from '@/widgets/SignOutButton'
import getSession from '@/lib/getSession'

export default async function Home() {
  const session = await getSession()

  return (
    <main>
      <h1 className="text-4xl text-green-500">Netflix Clone</h1>
      <p>Logged in as : {session.email}</p>
      <SignOutButton />
    </main>
  )
}
