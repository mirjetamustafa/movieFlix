import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { getGenreNames } from './utils'
import { RiPlayLargeLine } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { CiSaveUp2 } from 'react-icons/ci'
import { useStateValue } from '../StateProvder'

const MoreInfo = ({ selectedMovie }) => {
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

  const languageMap = {
    en: 'English',
    fr: 'French',
    es: 'Spanish',
    de: 'German',
    it: 'Italian',
    ja: 'Japanese',
    ko: 'Korean',
    zh: 'Chinese',
    hi: 'Hindi',
    ar: 'Arabic',
    ru: 'Russian',
  }
  const [successMessage, setSuccessMessage] = useState('')

  const [{ myList }, dispatch] = useStateValue()
  const addToList = () => {
    dispatch({
      type: 'ADD_TO_LIST',
      item: {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        genre: getGenreNames(movie.genre_ids, genresList),
        adult: movie.adult,
      },
    })

    setSuccessMessage('You added successfully')
    setTimeout(() => setSuccessMessage(''), 2000)
  }

  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
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
    <div className="bg-[#111827] h-300">
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
            src={`${IMAGE_PATH}${movie.backdrop_path}`}
            alt=""
            className="relative w-full h-[650px] bg-cover bg-center rounded-xl brightness-50"
          />
        </div>
        <div className="flex justify-between">
          <div className="">
            <h1 className="text-white text-2xl mt-3">{movie.title}</h1>
            <div className="flex text-white mt-4">
              <p className="bg-red-600 px-2 py-1  text-xs rounded-sm">
                {movie.adult ? '18+' : 'PG-13'}
              </p>
              <p className="text-sm mx-3">{movie.release_date?.slice(0, 4)}</p>
            </div>
            <div className="flex mt-5">
              <button className="bg-red-600 flex rounded-full px-4 py-2 text-white hover:bg-red-700 cursor-pointer">
                <RiPlayLargeLine className="mt-0.5 text-xl mr-1" />
                Play
              </button>

              <button className="bg-[#1F2937] rounded-full px-3 mr-2 ml-3 py-2 text-white hover:opacity-80 cursor-pointer">
                <AiOutlinePlus className="text-xl" />
              </button>

              <button className="bg-[#1F2937] rounded-full px-3 mx-2 py-2 text-white hover:opacity-80 cursor-pointer">
                <BiLike className="text-xl" />
              </button>

              <button
                onClick={addToList}
                className="bg-[#1F2937] rounded-full px-3 mx-2 py-2 text-white hover:opacity-80 cursor-pointer"
              >
                <CiSaveUp2 className="text-xl" />
              </button>
              {successMessage && (
                <p className="bg-green-600 rounded-full text-white mt- py-3 px-3 text-sm">
                  {successMessage}
                </p>
              )}
            </div>
          </div>
          <div className="bg-[#1F2937] w-70 h-35 rounded-md mt-3 p-5">
            <h1 className="font-bold text-xl text-white">More Info</h1>
            <p className="flex text-white text-sm mt-3">
              <span className="mr-1 text-gray-400">Genre: </span>
              {getGenreNames(movie.genre_ids, genresList)}
            </p>
            <p className="flex text-white text-sm mt-3">
              <span className="mr-1 text-gray-400">Language: </span>
              {languageMap[movie.original_language] || movie.original_language}
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-md text-white mt-3 md:pr-[50%]">
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
