import Image from '../Images/logo.png'
import { auth } from './utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { avatar_logo } from './utils/Constants';

const Header = () => {
const user = useSelector((state)=>state.user);
// console.log(user);
  const navigate = useNavigate()
  
  const handleEvent = ()=>{
  
signOut(auth).then(() => {
     navigate('/')
}).catch((error) => {
  // An error happened.
  console.log(error);
});
  }
 

  return (
    <div className='flex absolute top-[0%]  justify-between px-6 z-10'>
     < img className='w-[12%] bg-grey-400' src={Image} alt='logo' />
      {
        user &&  <div className='flex gap-1 items-center '>
           <img className='pt-2' src={avatar_logo} alt='logo' />
        <button onClick={handleEvent} className='text-white font-semibold text-xl' >signOut</button>
        
          </div>
      }
     
    </div>
  )
}

export default Header
