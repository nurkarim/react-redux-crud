import { ACTION_TYPES } from '../constants/actionTypes';
import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name:'home',
  initialState:{
    loading: false,
    data: {
      name:'roky','id':1
    },
    error: false,
  },
  reducers:{
    FETCH_START:(state)=>{
      state.loading=true
    },
    FETCH_SUCCESS:(state,action)=>{
      state.loading=false
      state.data=action.payload
    },
    FETCH_ERROR:(state)=>{
      state.error=true
    }
  }
});

export const { FETCH_START,FETCH_ERROR,FETCH_SUCCESS }=homeSlice.actions;
export default homeSlice.reducer;
