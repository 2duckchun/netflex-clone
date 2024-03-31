'use client'

import Image from 'next/image'
import NetflexLogo from '/public/images/default-green.png'
import { useRouter } from 'next/navigation'

export const SelectableProfiles = ({ session }: { session: User }) => {
  const router = useRouter()
  return (
    <div
      className="mt-10 flex items-center justify-center gap-8"
      onClick={() => router.push('/')}
    >
      <div className="group mx-auto w-44 flex-row">
        <div className="flex size-44 items-center justify-center overflow-hidden rounded-md border-2 border-transparent group-hover:cursor-pointer group-hover:border-white">
          <Image src={NetflexLogo} alt="netflix" />
        </div>
        <div className="mt-4 text-center text-2xl text-gray-400 group-hover:text-white">
          {session.name}
        </div>
      </div>
    </div>
  )
}

export default SelectableProfiles
