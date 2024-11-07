import Header from './Header';
import useMovieData from '../hooks/useMovieData';
import MainContainer from './MainContainer';
const Browse = () => {
  useMovieData()


     

  return (
    <div className='absolute  w-full bg-cover h-screen top-[0%]  absolute flex bg-grey-600' style={{backgroundImage:'url(https://static.vecteezy.com/system/resources/previews/036/226/872/non_2x/ai-generated-nature-landscapes-background-free-photo.jpg)'}}>
       
        <Header />
       <MainContainer />
       </div>
  )
}

export default Browse;
