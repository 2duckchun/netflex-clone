export const fetcher = (url: string, obj?: RequestInit) => async () => {
  const res = await fetch(url, { ...obj })
  return await res.json()
}
