import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import MovieGrid from '../../components/MovieGrid' // Adjust the import path accordingly

const API_KEY = 'YOUR_API_KEY' // Replace with your actual API key

const SearchedMovies = () => {
  const {query} = useParams()
  const [searchedMovies, setSearchedMovies] = useState([])

  const fetchSearchedMovies = async query => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
      )
      const data = await response.json()
      setSearchedMovies(data.results)
    } catch (error) {
      console.error('Error fetching searched movies:', error)
    }
  }

  useEffect(() => {
    fetchSearchedMovies(query)
  }, [query])

  return (
    <div className="searched-movies">
      <h1 className="movies-heading">Search Results for "{query}"</h1>
      <MovieGrid movies={searchedMovies} />
    </div>
  )
}

export default SearchedMovies
