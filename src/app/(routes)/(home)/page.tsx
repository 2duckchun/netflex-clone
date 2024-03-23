import { getSession } from '@/shared/lib'

export default async function Home() {
  const session = await getSession()

  return <div>ddd</div>
}
