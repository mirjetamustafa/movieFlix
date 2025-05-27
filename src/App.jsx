import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import MyList from './components/MyList'

import {
  getPopularMovies,
  getActionMovies,
  getAnimationMovies,
  getAllMovies,
  getTvShows,
  searchAll,
} from './api/api'
import MoreInfo from './components/MoreInfo'
import Footer from './components/Footer'

function App({ genresList, getGenreNames }) {
  const [movies, setMovies] = useState([])
  const [action, setAction] = useState([])
  const [animation, setAnimation] = useState([])
  const [allMovies, setAllMovies] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMovie, setSelectedMovie] = useState({})

  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        const trendingMovies = await getPopularMovies()
        setMovies(trendingMovies)
        setSelectedMovie(trendingMovies[0])
      } catch (err) {
        console.log(err)
        setError('Failed to load movies')
      }
    }
    loadTrendingMovies()
  }, [])

  useEffect(() => {
    const loadActionMovies = async () => {
      try {
        const actionMovies = await getActionMovies()
        setAction(actionMovies)
      } catch (err) {
        console.log(err)
        setError('Failed to load movies')
      }
    }
    loadActionMovies()
  }, [])

  useEffect(() => {
    const loadAnimationMovies = async () => {
      try {
        const animationMovies = await getAnimationMovies()
        setAnimation(animationMovies)
      } catch (err) {
        console.log(err)
        setError('Failed to load movies')
      }
    }
    loadAnimationMovies()
  }, [])

  useEffect(() => {
    const allMovie = async () => {
      try {
        const allMovie = await getAllMovies()
        setAllMovies(allMovie)
      } catch (err) {
        console.log(err)
        setError('Failed to load movies')
      }
    }
    allMovie()
  }, [])

  useEffect(() => {
    const allTvShows = async () => {
      try {
        const allTvShows = await getTvShows()
        setTvShows(allTvShows)
      } catch (err) {
        console.log(err)
        setError('Failed to load movies')
      }
    }
    allTvShows()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)

    try {
      const searchResult = await searchAll(searchQuery)
      setMovies(searchResult)
      setError(null)
    } catch (err) {
      console.log(err)
      setError('Failed to search...')
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
              <Home
                movies={movies}
                action={action}
                animation={animation}
                loading={loading}
                searchQuery={searchQuery}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
              <Movies movies={movies} allMovies={allMovies} />
              <Footer />
            </>
          }
        />
        <Route
          path="/tvshows"
          element={
            <>
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
              <TvShows tvShows={tvShows} />
              <Footer />
            </>
          }
        />
        <Route
          path="/mylist"
          element={
            <>
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
              <MyList />
              <Footer />
            </>
          }
        />
        <Route
          path="/moreInfo"
          element={
            <>
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
              <MoreInfo
                selectedMovie={selectedMovie}
                genresList={genresList}
                getGenreNames={getGenreNames}
              />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
