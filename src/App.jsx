import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import MyList from './components/MyList'
import { getPopularMovies } from './api/api'

function App() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        const trendingMovies = await getPopularMovies()
        setMovies(trendingMovies)
      } catch (err) {
        console.log(err)
        setError('Failed to load movies')
      }
    }
    loadTrendingMovies()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home movies={movies} />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header />
              <Movies />
            </>
          }
        />
        <Route
          path="/tvshows"
          element={
            <>
              <Header />
              <TvShows />
            </>
          }
        />
        <Route
          path="/mylist"
          element={
            <>
              <Header />
              <MyList />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
