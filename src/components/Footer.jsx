import React from 'react'
import { Link } from 'react-router-dom'
import { LuFacebook } from 'react-icons/lu'
import { FiTwitter, FiYoutube } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="bg-[#1e242e]">
      <div className="grid md:grid-cols-4 p-5">
        <div className="m-4">
          <h1 className="text-red-600 text-2xl font-bold">MovieFlix</h1>
          <p className="text-sm text-gray-400 md:pr-29 max-md:pr-20 mt-4">
            Your ultimate destination for movies and TV shows. Stream thousands
            of titles anytime, anywhere.
          </p>
        </div>
        <div className="m-4">
          <h1 className="text-white text-lg font-semibold">Browse</h1>
          <ul className="text-gray-400 flex flex-col">
            <Link to={'/movies'} className="hover:text-gray-300">
              Movies
            </Link>
            <Link to={'/tvshows'} className="hover:text-gray-300">
              TV Shows
            </Link>
            <Link to={'/'} className="hover:text-gray-300">
              Documentaries
            </Link>
            <Link to={'/'} className="hover:text-gray-300">
              Kids
            </Link>
            <Link to={'/'} className="hover:text-gray-300">
              New Releases
            </Link>
          </ul>
        </div>
        <div className="m-4">
          <h1 className="text-white text-lg font-semibold">Account</h1>
          <ul className="text-gray-400 flex flex-col">
            <Link to={'/mylist'} className="hover:text-gray-300">
              My List
            </Link>
            <Link to={'/'} className="hover:text-gray-300">
              Account Settings
            </Link>
            <Link to={'/'} className="hover:text-gray-300">
              Subscription
            </Link>
            <Link to={'/'} className="hover:text-gray-300">
              Help Center
            </Link>
            <Link to={'/'} className="hover:text-gray-300">
              Contact Us
            </Link>
          </ul>
        </div>
        <div className="m-4">
          <h1 className="text-white text-lg font-semibold">Company</h1>
          <ul className="text-gray-400 flex flex-col">
            <Link to={'/'} className="hover:text-gray-300">
              About Us
            </Link>
            <Link to={'/'} className="hover:text-gray-300">
              Careers
            </Link>
            <Link to={'/'} className="hover:text-gray-300">
              Press
            </Link>
            <Link to={'/'} className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link to={'/'} className="hover:text-gray-300">
              Terms of Service
            </Link>
          </ul>
        </div>
      </div>
      <div className="border-b border-white/10 mx-5" />
      <div className="grid md:grid-cols-2 md:justify-between justify-center mt-7">
        <div className="m-4 ml-15">
          <ul className="flex">
            <Link to={'/'}>
              <LuFacebook className="text-gray-400 text-xl mx- hover:text-gray-300" />
            </Link>
            <Link to={'/'}>
              <FiTwitter className="text-gray-400 text-xl mx-2 hover:text-gray-300" />
            </Link>
            <Link to={'/'}>
              <FaInstagram className="text-gray-400 text-xl mx-2 hover:text-gray-300" />
            </Link>
            <Link to={'/'}>
              <FiYoutube className="text-gray-400 text-xl mx-2 hover:text-gray-300" />
            </Link>
          </ul>
        </div>
        <div className="m-4">
          <p className="flex md:justify-end text-sm text-gray-400 mr-5">
            © 2024 MovieFlx. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
