import React from 'react'
import { CiPlay1 } from 'react-icons/ci'
import { IoIosInformationCircleOutline } from 'react-icons/io'

const Home = () => {
  return (
    <div className="bg-[#111827] p-9">
      <div className='bg-[url("https://c8.alamy.com/comp/2AA0W9D/picturehouse-cinema-foyer-picturehouse-central-cinema-near-piccadilly-circus-in-londons-west-end-2AA0W9D.jpg")] w-full h-164 bg-cover bg-center rounded-xl'>
        <div className="grid content-center bg-black/30 h-full w-full rounded-xl">
          <div className="px-15 pt-35 max-md:text-center">
            <h1 className="text-white text-4xl font-bold ">Inception</h1>
            <div className="flex max-md:justify-center">
              <p className="bg-red-600 rounded-sm px-2 py-1 mt-5 text-white text-sm">
                PG-13
              </p>
              <p className="pl-4 pr-2 py-1 mt-5 text-white text-sm">2010</p>
              <p className="px-2 py-1 mt-5 text-white text-sm">2h 28m</p>
            </div>
            <p className="text-md text-white mt-3">
              A thief who steals corporate secrets through the use of
              dream-sharing technology is <br /> given the inverse task of
              planting an idea into the mind of a C.E.O.
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

export default Home
