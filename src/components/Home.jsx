import React from 'react'
// import { CiPlay1 } from 'react-icons/ci'
// import { IoIosInformationCircleOutline } from 'react-icons/io'
import TrendingNow from './TrendingNow'
import ActionMovies from './ActionMovies'
import AnimationMovies from './AnimationMovies'
import BackgroundMovies from './BackgroundMovies'

import { getGenreNames } from './utils'

const Home = ({ movies, action, animation, searchQuery }) => {
  const genresList = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ]
  return (
    <div className="bg-[#111827] p-9 h-full">
      <BackgroundMovies
        movies={movies}
        genresList={genresList}
        getGenreNames={getGenreNames}
      />
      <TrendingNow
        movies={movies}
        genresList={genresList}
        getGenreNames={getGenreNames}
      />
      {!searchQuery && (
        <>
          <AnimationMovies
            animation={animation}
            genresList={genresList}
            getGenreNames={getGenreNames}
          />
          <ActionMovies
            action={action}
            genresList={genresList}
            getGenreNames={getGenreNames}
          />
        </>
      )}
    </div>
  )
}

export default Home
