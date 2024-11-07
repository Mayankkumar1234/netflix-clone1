import React, { useEffect, useState } from 'react'
import MoviesList from './MoviesList';
import {useSelector} from "react-redux"

const SecondaryContainer = () => {
  const data = useSelector((state)=>state.movies)
 
  return (
    <div className='w-full'>
        <MoviesList title={"Now playing"} playingMovies={data?.nowPlayingMovies} />
      </div>
  )
}

export default SecondaryContainer
