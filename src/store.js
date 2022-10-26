/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: rootReducer,
  middleware:[thunk]
})

export default store