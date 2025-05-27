import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#111827]">
      <div className="border-b border-gray-500 mx-5" />
      <div className="grid md:grid-cols-4 p-5">
        <div className="m-4">
          <h1 className="text-red-600 text-2xl font-bold">MovieFlix</h1>
          <p className="text-sm text-gray-400 pr-29 mt-4">
            Your ultimate destination for movies and TV shows. Stream thousands
            of titles anytime, anywhere.
          </p>
        </div>
        <div className="bg-red-400 h-20 m-4"></div>
        <div className="bg-red-400 h-20 m-4"></div>
        <div className="bg-red-400 h-20 m-4"></div>
      </div>
    </div>
  )
}

export default Footer
