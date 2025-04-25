import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import MyList from './components/MyList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
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
