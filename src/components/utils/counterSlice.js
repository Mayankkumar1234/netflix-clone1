import { createSlice } from "@reduxjs/toolkit";

export const counterSlice= createSlice({
  name:'user',
  initialState:null,
  reducers:{
    addUser:(state,action)=>{
      return action.payload
    },
    removeUser:(state,action)=>{
    return null
    }
  }
})

export const {addUser,removeUser}=counterSlice.actions
export default counterSlice.reducer;