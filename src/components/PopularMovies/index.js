import React, {useState, useEffect} from 'react'
import MovieGrid from '../../components/MovieGrid'

const API_KEY = 'YOUR_API_KEY' // Replace with your actual API key

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetchPopularMovies()
  }, [])

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      )
      const data = await response.json()
      setPopularMovies(data.results)
    } catch (error) {
      console.error('Error fetching popular movies:', error)
    }
  }

  return (
    <div className="popular-movies">
      <h1 className="movies-heading">Popular Movies</h1>
      <MovieGrid movies={popularMovies} />
    </div>
  )
}

export default PopularMovies
