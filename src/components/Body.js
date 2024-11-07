import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { Link, Route, Routes } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from './utils/counterSlice'; 
import { auth } from './utils/Firebase';

const Main = () => {
  const  dispatch = useDispatch()
  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
         const uid = user.uid;
         const {displayName,email}=  user
           dispatch(addUser({uid: uid,displayName,email}))
           console.log(user);
         // ...
      } else {
        dispatch(removeUser());
      }
    });
  },[])
  return (
   <>
    <div className='w-full h-screen absolute bg-black' style={{backgroundImage:"url(https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg)"}}>
       
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
   </>
  )
}

export default Main
