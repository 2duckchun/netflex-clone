import { Navbar } from '@/widgets/navbar'
import { getSession } from '@/shared/lib'

export default async function Home() {
  const session = await getSession()

  return (
    <main>
      <Navbar />
    </main>
  )
}
