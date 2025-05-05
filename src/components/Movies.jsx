import React from 'react'
import BackgroundMovies from './BackgroundMovies'
import { getGenreNames } from './utils'

const Movies = ({ movies, allMovies }) => {
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
        getGenreNames={getGenreNames}
        genresList={genresList}
      />

      <div className="py-15 bg-[#111827]">
        <h1 className="text-white text-4xl font-bold">All Movies</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-9">
          {allMovies && allMovies.length > 0 ? (
            allMovies.map((allMovie) => (
              <div
                key={allMovie.id}
                className="group relative items-center justify-center overflow-hidden cursor-pointer"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${allMovie.poster_path}`}
                  alt={allMovie.title}
                  className="rounded-sm object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:from-black/30 group-hover:via-black/40 group-hover:to-black/40" />
                <div className="absolute inset-0 grid content-end py-9 px-9 text-white group-hover:opacity-100 opacity-0 duration-300 cursor-pointer transition-all">
                  <h2 className="text-lg font-bold">{allMovie.title}</h2>
                  <div className="flex">
                    <p className="text-sm">
                      {allMovie.release_date?.slice(0, 4)}
                    </p>
                    <p className="bg-red-600 px-2 py-1 mx-2 text-xs rounded-sm">
                      {allMovie.adult ? '18+' : 'PG-13'}
                    </p>
                    <p className="text-white text-sm">
                      {getGenreNames(allMovie.genre_ids, genresList)}
                    </p>
                  </div>
                  <button className="bg-red-600 rounded-full md:px-25 px-9 py-1 mt-3 cursor-pointer hover:bg-red-700">
                    Play
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">Loading movies...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Movies
