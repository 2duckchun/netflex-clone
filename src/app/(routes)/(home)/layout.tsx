import Image from 'next/image'
import NetflexLogo from '/public/images/logo.png'
import { Navbar } from '@/layers/3.widgets/navbar'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  )
}
