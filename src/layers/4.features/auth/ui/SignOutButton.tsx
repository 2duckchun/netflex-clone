'use client'

import Button from '@/layers/6.shared/ui/button'
import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <Button className="h-10 w-full bg-white" onClick={signOut}>
      Logout!
    </Button>
  )
}
