import Image from 'next/image'
import NetflexLogo from '/public/images/logo.png'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative size-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="size-full bg-black lg:bg-black/50">
        <header>
          <nav className="px-12 py-5">
            <Image src={NetflexLogo} alt={'Netflex logo'} width={120} />
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}
