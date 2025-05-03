import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import MyList from './components/MyList'
import { getPopularMovies, getActionMovies, getComedyMovies } from './api/api'

function App() {
  const [movies, setMovies] = useState([])
  const [action, setAction] = useState([])
  const [comedy, setComedy] = useState([])
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
    const loadComedyMovies = async () => {
      try {
        const comedyMovies = await getComedyMovies()
        setComedy(comedyMovies)
      } catch (err) {
        console.log(err)
        setError('Failed to load movies')
      }
    }
    loadComedyMovies()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home movies={movies} action={action} comedy={comedy} />
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
