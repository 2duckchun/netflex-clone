import getSession from '@/layers/6. shared/lib/getSession'
import Image from 'next/image'
import NetflexLogo from '/public/images/default-green.png'

export default async function Profile() {
  const session = await getSession()

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-center text-3xl text-white md:text-6xl">
          Who is watching?
        </h1>
        <div className="mt-10 flex items-center justify-center gap-8">
          <div>
            <div className="group mx-auto w-44 flex-row">
              <div className="flex size-44 items-center justify-center overflow-hidden rounded-md border-2 border-transparent group-hover:cursor-pointer group-hover:border-white">
                <Image src={NetflexLogo} alt="netflix" />
              </div>
              <div className="mt-4 text-center text-2xl text-gray-400 group-hover:text-white">
                {session.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
