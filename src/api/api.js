const API_KEY = 'bf3c87012c2b0cddaf67d94a061d1c2d'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

export const getActionMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28,12`
  )
  const data = await response.json()
  return data.results
}

export const getAnimationMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`
  )
  const data = await response.json()
  return data.results
}

export const getAllMovies = async () => {
  const response = await fetch(` ${BASE_URL}/discover/movie?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

// export const getTvShows = async () => {
//   const response = await fetch(
//     `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=18`
//   )
//   const data = await response.json()
//   return data.results
// }

export const getTvShows = async () => {
  const response = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

export const searchAll = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  )
  const data = await response.json()
  return data.results
}
