export default function ProfilesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col">
        <header>
          <h1 className="text-center text-3xl text-white md:text-6xl">
            Who is watching?
          </h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}
