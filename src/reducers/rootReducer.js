import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import appReducer from './appReducer';
import homeReducer from './homeReducer';

export default combineReducers({
    simpleReducerValue:simpleReducer,
    appReducerValue:appReducer,
    homeReducer:homeReducer,
});