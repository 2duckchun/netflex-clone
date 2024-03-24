import { HomePage } from '@/pages/home'
import { getSession } from '@/shared/lib'

export default async function Home() {
  await getSession()

  return <HomePage />
}
