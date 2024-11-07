import Header from './Header';
import useMovieData from '../hooks/useMovieData';
import MainContainer from './MainContainer';
import UsePopularMovies from '../hooks/UsePopularMovies';
const Browse = () => {
  useMovieData()
  UsePopularMovies()

     

  return (
    <div className='  w-full absolute top-[0%] bg-cover bg-grey-600'>
       
        {/* <Header /> */}
       <MainContainer />
       </div>
  )
}

export default Browse;
