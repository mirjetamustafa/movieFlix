import React from 'react'
import { CiPlay1 } from 'react-icons/ci'
import { IoIosInformationCircleOutline } from 'react-icons/io'

const BackgroundMovies = ({ movies, getGenreNames, genresList }) => {
  const backgroundImageUrl = movies?.[0]?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`
    : null
  return (
    <div className="">
      <div
        className="relative w-full z-0 h-[600px] bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: backgroundImageUrl
            ? `url(${backgroundImageUrl})`
            : 'none',
        }}
      >
        <div className="grid content-center bg-black/30 h-full w-full rounded-xl">
          <div className="px-15 pt-35 max-md:text-center">
            <h1 className="text-white text-4xl font-bold ">
              {movies?.[0]?.title || 'Loading...'}
            </h1>
            <div className="flex max-md:justify-center">
              <p className="bg-red-600 rounded-sm px-2 py-1 mt-5 text-white text-sm">
                {movies?.[0]?.adult ? '18+' : 'PG-13'}
              </p>
              <p className="pl-4 pr-2 py-1 mt-5 text-white text-sm">
                {' '}
                {movies?.[0]?.release_date?.slice(0, 4)}
              </p>
              <p className="px-2 py-1 mt-5 text-white text-sm">
                {' '}
                {getGenreNames(movies?.[0]?.genre_ids, genresList)}
              </p>
            </div>
            <p className="text-md text-white mt-3 pr-[50%]">
              {movies?.[0]?.overview}
            </p>
            <div className="flex max-md:justify-center">
              <button className="bg-red-600 flex rounded-full px-4 py-2 mt-3 text-white hover:bg-red-700 cursor-pointer">
                <CiPlay1 className="mt-0.5 text-xl mr-1" />
                Play
              </button>

              <button className="bg-gray-600 flex rounded-full px-4 py-2 mt-3 mx-3 text-white hover:bg-gray-700 cursor-pointer">
                <IoIosInformationCircleOutline className="mt-0.5 text-xl mr-1" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundMovies
