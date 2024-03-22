type UserSession = {
  id: string
  name: string
  image: string | null
  email: string | null
  emailVerified: Date | null
  hashedPassword: string | null
  createdAt: Date
  updatedAt: Date
  favoriteIds: string[]
}
