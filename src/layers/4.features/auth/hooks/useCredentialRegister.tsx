'use client'

import { BuiltInProviderType } from 'next-auth/providers/index'
import { LiteralUnion, signIn } from 'next-auth/react'
import { useCallback } from 'react'

export default function useNextAuthLogin({
  provider,
  email,
  password,
  callbackUrl,
}: {
  provider: 'credentials' | 'google' | 'github'
  email: string
  password: string
  callbackUrl: string
}) {
  const login = useCallback(async () => {
    try {
      await signIn(provider, {
        email,
        password,
        callbackUrl,
      })
    } catch (error) {
      console.error(error)
    }
  }, [email, password, provider, callbackUrl])

  return login
}
