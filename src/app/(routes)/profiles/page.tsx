import { getSession } from '@/shared/lib'
import { SelectableProfiles } from '@/widgets/profiles/'

export default async function Profile() {
  const session = await getSession()

  return <SelectableProfiles session={session} />
}
