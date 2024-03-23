export const getRandomMovieData = async () => {
  const res = await fetch('/api/movie/random')
  return res.json()
}
