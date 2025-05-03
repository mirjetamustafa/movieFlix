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
} from './api/api'

function App() {
  const [movies, setMovies] = useState([])
  const [action, setAction] = useState([])
  const [animation, setAnimation] = useState([])
  const [allMovies, setAllMovies] = useState([])
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

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home movies={movies} action={action} animation={animation} />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header />
              <Movies movies={movies} allMovies={allMovies} />
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
