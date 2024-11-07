import { configureStore } from "@reduxjs/toolkit";
import userReducer from './counterSlice'
import moviesReducer from './MovieCounterSlice'

export default configureStore({
  reducer:{
    user:userReducer,
    movies:moviesReducer
  }
})