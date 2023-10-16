import React, {useState, useEffect} from 'react'
import MovieGrid from '../../components/MovieGrid'

const API_KEY = 'YOUR_API_KEY' // Replace with your actual API key
const upcomingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    fetchMovies(upcomingMoviesURL)
  }, [])

  const fetchMovies = async url => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setUpcomingMovies(data.results)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  return (
    <div className="upcoming-movies">
      <h1 className="movies-heading">Upcoming Movies</h1>
      <div className="movie-grid">
        {upcomingMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-rating">Rating: {movie.vote_average}</p>
            <button className="view-details-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingMovies
