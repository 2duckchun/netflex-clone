'use client'

export default function Button({
  className,
  children,
  onClick,
}: {
  className?: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
