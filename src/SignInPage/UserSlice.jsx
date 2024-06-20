import React from "react";
import { createSlice } from '@reduxjs/toolkit'

const Userslice=createSlice({
    name:'Auth',
    initialState:{
        isAuthentication:false,
        user:null
    },
    reducers:{
        Login(state,action){
            state.isAuthentication=true;
            state.user=action.payload;
        },
        Logout(state){
            state.isAuthentication=false;
            state.user=null;
        }
    }
})
export default Userslice.reducer;
export const {Login,Logout}=Userslice.actions;
export const selectAuth = (state) => state.Auth;