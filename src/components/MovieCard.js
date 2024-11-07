
import React from 'react'
import {IMG_CDN } from './utils/Constants'
const MovieCard = ({poster}) => {
  return (
    <div className='w-40 '>
      <img className='w-[85%]' src={`${IMG_CDN}${poster}`} alt='movie-card' />
    </div>
  )
}

export default MovieCard
