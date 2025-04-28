import React, { useState } from 'react'
import { HiOutlineFilm } from 'react-icons/hi'
import { CiSearch } from 'react-icons/ci'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showInput, setShowInput] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex justify-between bg-[#111827]">
      <div className="p-5 flex">
        <HiOutlineFilm className="text-[#EF4444] text-3xl mx-2" />
        <h1 className="text-xl text-white font-bold">MovieFlix</h1>
      </div>
      <div className="flex p-5">
        {/* Mobile */}
        <div className="md:hidden mx-5 mt-2 text-white text-xl ">
          <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
            <RxHamburgerMenu />
          </button>
          {isOpen && (
            <div className="bg-black text-white fixed top-19 z-50 left-3 h-100 w-115 transition delay-150 duration-300 ease-in-out">
              <div className="flex justify-end px-5 py-3 ">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl cursor-pointer"
                >
                  <IoMdClose />
                </button>
              </div>
              <ul className="flex flex-col text-center text-white mt-0.5">
                <Link
                  className="px-3 py-5 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
                  to={'/'}
                >
                  Home
                </Link>
                <Link
                  className="px-3 py-5 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
                  to={'/movies'}
                >
                  Movies
                </Link>
                <Link
                  className="px-3 py-5 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
                  to={'/tvshows'}
                >
                  TV Shows
                </Link>
                <Link
                  className="pl-3 py-5 pr-5 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
                  to={'/mylist'}
                >
                  My List
                </Link>
              </ul>
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
        <div className=" flex justify-end">
          <input
            type="text"
            className={`relative bg-[#374151] transiton-all duration-300 ease-in-out ml-2 px-3 py-2 outline outline-[#374151] focus:outline-[#EF4444] focus:outline-2 rounded-full text-white placeholder:text-gray-400 ${
              showInput ? 'w-60' : 'w-0 opacity-0'
            }`}
            placeholder="Search Movies..."
          />
          <button
            onClick={() => setShowInput(!showInput)}
            className="absolute p-2 -mt-1 text-white hover:bg-white/15 rounded-full focus:outline-none cursor-pointer transition delay-150 duration-300 ease-in-out"
          >
            <CiSearch size={28} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
