'use client'

import Image from 'next/image'
import NetflexLogo from '/public/images/logo.png'
import Input from '@/components/input'
import { useCallback, useState } from 'react'

export default function Auth() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login',
    )
  }, [])

  return (
    <div className="relative size-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="size-full bg-black lg:bg-black/50">
        <nav className="px-12 py-5">
          <Image src={NetflexLogo} alt={'Netflex logo'} width={120} />
        </nav>
        <div className="flex justify-center">
          <div className="mt-2 w-full self-center rounded-md bg-black/70 p-14 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === 'login' ? 'Login' : 'Create an account'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  id="name"
                  label="Username"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setName(event.target.value)
                  }
                  value={name}
                  type="text"
                />
              )}

              <Input
                id="email"
                label="Email"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.target.value)
                }
                value={email}
                type="email"
              />
              <Input
                id="password"
                label="Password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(event.target.value)
                }
                value={password}
                type="password"
              />
            </div>
            <button className="mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <p className="mt-12 text-neutral-500">
              {variant === 'login'
                ? 'First time using Netflex?'
                : 'Already have an account?'}
              <span
                onClick={toggleVariant}
                className="ml-1 cursor-pointer text-white hover:underline"
              >
                {variant === 'login' ? 'Create and account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
