
import React from 'react'
import {IMG_CDN } from './utils/Constants'
const MovieCard = ({poster}) => {
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img src={`${IMG_CDN}${poster}`} alt='movie-card' />
    </div>
  )
}

export default MovieCard
