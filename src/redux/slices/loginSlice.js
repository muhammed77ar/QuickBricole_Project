import { createSlice } from "@reduxjs/toolkit";
import {insialState} from "../state";
// console.log(iniState)
export const loginSlice = createSlice({
  name:'login',
  initialState:insialState,
  reducers:{
    login:(state,{payload})=>{
    return {...state,authenticated:{accessToken:true,user:payload}}
    },
    logout:(state)=>{
      localStorage.removeItem('access_token');
    return {...state,authenticated:{accessToken:false,user:{}}}
    },
  }
})
export const {login,logout,setUser}=loginSlice.actions;
export default loginSlice.reducer;