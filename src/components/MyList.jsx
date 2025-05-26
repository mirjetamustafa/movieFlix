import React from 'react'
import { useStateValue } from '../StateProvder'
import { getGenreNames } from './utils'

const MyList = ({ genresList }) => {
  const removeFromList = (id) => {
    dispatch({
      type: 'REMOVE_FROM_LIST',
      id,
    })
  }

  const [{ myList }, dispatch] = useStateValue()
  return (
    <div>
      {myList?.length === 0 ? (
        <div className="bg-[#111827] h-screen">
          <h1 className="text-5xl text-white font-bold text-center pt-9">
            Your list is empty!
          </h1>
        </div>
      ) : (
        <div className="py-15 bg-[#111827] h-full">
          <h1 className="text-white text-4xl font-bold text-center">My List</h1>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-9">
            {myList.map((item) => (
              <div
                key={item.id}
                className="group relative items-center justify-center overflow-hidden cursor-pointer"
              >
                <div className="">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    className="rounded-sm object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:from-black/30 group-hover:via-black/40 group-hover:to-black/40"></div>
                <div className="absolute inset-0 grid content-end py-9 px-9 text-white group-hover:opacity-100 opacity-0 duration-300 cursor-pointer transition-all">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <div className="flex">
                    <p className="text-sm">{item.release_date?.slice(0, 4)}</p>
                    <p className="bg-red-600 px-2 py-1 mx-2 text-xs rounded-sm">
                      {item.adult ? '18+' : 'PG-13'}
                    </p>
                    <p className="text-white text-sm">
                      {getGenreNames(item.genre_ids, genresList)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromList(item.id)}
                    className="bg-red-600 rounded-full md:px-25 px-9 py-1 mt-3 cursor-pointer hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MyList
