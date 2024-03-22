'use client'

interface InputProps {
  className?: string
  children: React.ReactNode
  onClick: () => void
}

export const Button: React.FC<InputProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
