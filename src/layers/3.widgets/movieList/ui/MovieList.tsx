import { isEmpty } from 'lodash'
import { MovieCard } from './MovieCard'

interface MovieListProps {
  data: Movie[]
  title: string
}

export const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) return null

  return (
    <div className="mt-4 space-y-8 px-4 md:px-12">
      <div>
        <p className="mb-4 text-base font-semibold text-white md:text-xl lg:text-2xl">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data?.map((movie) => {
            return <MovieCard key={movie.id} data={movie} />
          })}
        </div>
      </div>
    </div>
  )
}
