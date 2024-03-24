export const getMovieListData = async () => {
  const res = await fetch('/api/movie/list')
  return res.json()
}
