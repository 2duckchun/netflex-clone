import React from 'react'

interface InputProps {
  id: string
  value: string
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: HTMLInputElement['type']
}

export const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        id={id}
        onChange={onChange}
        className="peer block w-full appearance-none rounded-md bg-neutral-700 px-6 pb-1 pt-6 text-base text-white focus:outline-none focus:ring-0"
        placeholder=" "
      />
      <label
        className="absolute left-6 top-4 z-10 origin-[0] -translate-y-3 scale-75 text-base text-zinc-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
