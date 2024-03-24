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
