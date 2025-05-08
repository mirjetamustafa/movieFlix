import React from 'react'
import BackgroundShows from './BackgroundShows'
import { getGenreNames } from './utils'

const TvShows = ({ tvShows }) => {
  const genresTvList = [
    {
      id: 10759,
      name: 'Action & Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 10762,
      name: 'Kids',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10763,
      name: 'News',
    },
    {
      id: 10764,
      name: 'Reality',
    },
    {
      id: 10765,
      name: 'Sci-Fi & Fantasy',
    },
    {
      id: 10766,
      name: 'Soap',
    },
    {
      id: 10767,
      name: 'Talk',
    },
    {
      id: 10768,
      name: 'War & Politics',
    },
    {
      id: 37,
      name: 'Western',
    },
  ]

  return (
    <div className="bg-[#111827] p-9 h-full">
      <BackgroundShows
        tvShows={tvShows}
        getGenreNames={getGenreNames}
        genresTvList={genresTvList}
      />

      <div className="py-15 bg-[#111827]">
        <h1 className="text-white text-4xl font-bold">All Shows</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-9">
          {tvShows && tvShows.length > 0 ? (
            tvShows.map((shows) => (
              <div
                key={shows.id}
                className="group relative items-center justify-center overflow-hidden cursor-pointer"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${shows.poster_path}`}
                  alt={shows.title}
                  className="rounded-sm object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:from-black/30 group-hover:via-black/40 group-hover:to-black/40" />
                <div className="absolute inset-0 grid content-end py-9 px-9 text-white group-hover:opacity-100 opacity-0 duration-300 cursor-pointer transition-all">
                  <h2 className="text-lg font-bold">{shows.original_name}</h2>
                  <div className="flex">
                    <p className="text-sm">
                      {shows.first_air_date?.slice(0, 4)}
                    </p>
                    <p className="bg-red-600 px-2 py-1 mx-2 text-xs rounded-sm">
                      {shows.adult ? '18+' : 'PG-13'}
                    </p>
                    <p className="text-white text-sm">
                      {getGenreNames(shows.genre_ids, genresTvList)}
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

export default TvShows
