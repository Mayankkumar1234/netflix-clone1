import React from 'react'
import MovieCard from './MovieCard'
const MoviesList = ({title,playingMovies}) => {
 
  return (
    <div className='flex overflow-x-scroll bg-black font-semibold text-2xl absolute'>
      <h1 className='text-white w-full'>{title}</h1>
    {
     playingMovies.movies && playingMovies.movies.map((movie)=>(
       <div className='flex'>
         <MovieCard poster={movie.poster_path} />
       </div>

      ))
    }
    </div>
  )
}
export default MoviesList