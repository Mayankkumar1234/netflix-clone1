import { createSlice } from "@reduxjs/toolkit";


const moviesSlice =createSlice({

  name:'movies',
  initialState:{
   nowPlayingMovies:null,
   popularMovies: null,
   trailerVideo: null,
  },
  reducers:{
    addNowPlayingMovies:(state,action)=>{
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies = action.payload;
    },
    addtrailerVideo:(state,action)=>{
      state.trailerVideo = action.payload;
    }
  }
})

export const {addNowPlayingMovies,addPopularMovies,addtrailerVideo}=moviesSlice.actions
export default moviesSlice.reducer;