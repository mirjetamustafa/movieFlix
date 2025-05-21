import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const MoreInfo = ({}) => {
  const location = useLocation()
  const movie = location.state?.movie
  if (!movie) {
    return (
      <div className="text-white p-9">
        <p>No movie data avaliable</p>
        <Link to={'/'} className="text-blue-500">
          Go Back
        </Link>
      </div>
    )
  }
  return (
    <div className="bg-[#111827] h-250">
      <Link
        to={'/'}
        className="flex text-white pt-9 px-9 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
      >
        <FaArrowLeft className="mt-1 mx-2" />
        Back to Browser
      </Link>
      <div className="m-9">
        <div className="flex justify-center">
          <img
            src="https://www.hollywoodreporter.com/wp-content/uploads/2014/09/interstellar_poster_0.jpg?w=1440&h=810&crop=1"
            alt=""
            className="relative w-full z-0 h-[600px] bg-cover bg-center rounded-xl brightness-50"
          />
        </div>
        <h1 className="text-white text-2xl mt-3">{movie.title}</h1>
        <div className="flex text-white">
          <p className="bg-red-600 px-2 py-1 mx-2 text-xs rounded-sm">
            {movie.adult ? '18+' : 'PG-13'}
          </p>
          <p className="text-sm">{movie.release_date?.slice(0, 4)}</p>

          <p className="text-white text-sm">
            {/* {getGenreNames(movie.genre_ids, genresList)} */}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
