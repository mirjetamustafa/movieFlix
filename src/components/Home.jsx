import React from 'react'
import { CiPlay1 } from 'react-icons/ci'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import TrendingNow from './TrendingNow'
import ActionMovies from './ActionMovies'
import AnimationMovies from './AnimationMovies'
import BackgroundMovies from './BackgroundMovies'

const Home = ({ movies, action, animation }) => {
  //
  return (
    <div className="bg-[#111827] p-9 h-full">
      <BackgroundMovies movies={movies} />

      <TrendingNow movies={movies} />
      <AnimationMovies animation={animation} />
      <ActionMovies action={action} />
    </div>
  )
}

export default Home
