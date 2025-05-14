import React, { useState } from 'react'
import { HiOutlineFilm } from 'react-icons/hi'
import { CiSearch } from 'react-icons/ci'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Header = ({ searchQuery, setSearchQuery, handleSearch }) => {
  const [showInput, setShowInput] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex justify-between bg-[#1e242e] sticky z-40 top-0">
      <div className="p-5 flex">
        <HiOutlineFilm className="text-[#EF4444] text-3xl mx-2" />
        <h1 className="text-xl text-white font-bold">MovieFlix</h1>
      </div>
      <div className="flex p-5">
        {/* Mobile */}
        <div className="md:hidden mx-5 mt-2 text-white text-xl ">
          {!isOpen ? (
            <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <RxHamburgerMenu />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl cursor-pointer"
            >
              <IoMdClose />
            </button>
          )}

          {isOpen && (
            <div className="bg-[#1e242e] text-white fixed top-19 z-50 left-0 h-100 w-121 transition delay-150 duration-300 ease-in-out">
              <div className="flex justify-end px-5 py-3 "></div>
              <ul className="flex flex-col pl-9 text-white mt-0.5">
                <Link
                  className="px-3 py-3 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
                  to={'/'}
                >
                  Home
                </Link>
                <Link
                  className="px-3 py-3 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
                  to={'/movies'}
                >
                  Movies
                </Link>
                <Link
                  className="px-3 py-3 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
                  to={'/tvshows'}
                >
                  TV Shows
                </Link>
                <Link
                  className="pl-3 py-3 pr-5 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
                  to={'/mylist'}
                >
                  My List
                </Link>
              </ul>
              <input
                type="text"
                className="relative bg-[#374151] w-100 ml-9 mt-12 transiton-all duration-300 ease-in-out px-3 py-2 outline outline-[#374151] focus:outline-[#EF4444] focus:outline-2 rounded-full text-white placeholder:text-gray-400"
                placeholder="Search Movies..."
              />
            </div>
          )}
        </div>

        {/* End Mobile */}
        <ul className="text-white mt-0.5 max-md:hidden">
          <Link
            className="px-3 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
            to={'/'}
          >
            Home
          </Link>
          <Link
            className="px-3 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
            to={'/movies'}
          >
            Movies
          </Link>
          <Link
            className="px-3 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
            to={'/tvshows'}
          >
            TV Shows
          </Link>
          <Link
            className="pl-3 pr-5 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
            to={'/mylist'}
          >
            My List
          </Link>
        </ul>
        <div>
          <form
            onSubmit={handleSearch}
            className=" flex justify-end max-md:hidden"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`relative bg-[#374151] transiton-all duration-300 ease-in-out ml-2 px-3 py-2 outline outline-[#374151] focus:outline-[#EF4444] focus:outline-2 rounded-full text-white placeholder:text-gray-400 ${
                showInput ? 'w-60' : 'w-60'
              }`}
              placeholder="Search Movies..."
            />
            <button
              type="submit"
              // onClick={() => setShowInput(!showInput)}
              className="absolute p-2 -mt-1 text-white hover:bg-white/15 rounded-full focus:outline-none cursor-pointer transition delay-150 duration-300 ease-in-out"
            >
              <CiSearch size={28} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header
