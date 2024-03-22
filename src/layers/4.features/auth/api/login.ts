import { signIn } from 'next-auth/react'

export default async function login(
  provider: 'credentials' | 'google' | 'github',
  email?: string,
  password?: string,
  callbackUrl?: string,
) {
  try {
    await signIn(provider, {
      email,
      password,
      callbackUrl,
    })
  } catch (error) {
    console.error(error)
  }
}

//   const login = useCallback(async () => {
//     try {
//       await signIn('credentials', {
//         email,
//         password,
//         callbackUrl: '/profiles',
//       })
//     } catch (error) {
//       console.error(error)
//     }
//   }, [email, password])
