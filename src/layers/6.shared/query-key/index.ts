export const movieKeys = {
  all: ['movie'] as const,
  movieList: () => [...movieKeys.all, 'list'] as const,
  random: () => [...movieKeys.all, 'random'] as const,
  favoriteMovieList: () => [...movieKeys.all, 'favorite'] as const,
}

export const userKeys = {
  all: ['user'] as const,
  currentUser: () => [...userKeys.all, 'current'] as const,
}
