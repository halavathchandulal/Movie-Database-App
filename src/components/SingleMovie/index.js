import React, {useState, useEffect} from 'react'

const SingleMovie = ({match}) => {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetchMovieDetails(match.params.id)
  }, [match.params.id])

  const fetchMovieDetails = async movieId => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
      )
      const data = await response.json()
      setMovie(data)
    } catch (error) {
      console.error('Error fetching movie details:', error)
    }
  }

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          {/* Display other movie details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default SingleMovie
