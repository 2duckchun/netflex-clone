'use client'

import axios from 'axios'
import Image from 'next/image'
import NetflexLogo from '/public/images/logo.png'
import Input from '@/layers/6. shared/ui/input'
import { useCallback, useState } from 'react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

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

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles',
      })
    } catch (error) {
      console.error(error)
    }
  }, [email, password])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      })

      login()
    } catch (error) {
      console.error(error)
    }
  }, [email, name, password, login])

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
            <button
              onClick={variant === 'login' ? login : register}
              className="mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700"
            >
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <div
              onClick={() => signIn('google', { callbackUrl: '/profiles' })}
              className="mt-8 flex flex-row items-center justify-center gap-4"
            >
              <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80">
                <FcGoogle size={24} />
              </div>
              <div
                onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
              >
                <FaGithub size={24} />
              </div>
            </div>
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
