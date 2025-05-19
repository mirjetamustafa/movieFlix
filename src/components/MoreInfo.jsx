import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const MoreInfo = () => {
  return (
    <div className="bg-[#111827] h-screen">
      <Link
        to={'/'}
        className="flex text-white pt-9 px-9 hover:text-[#EF4444] transition delay-150 duration-300 ease-in-out"
      >
        <FaArrowLeft className="mt-1 mx-2" />
        Back to Browser
      </Link>
    </div>
  )
}

export default MoreInfo
