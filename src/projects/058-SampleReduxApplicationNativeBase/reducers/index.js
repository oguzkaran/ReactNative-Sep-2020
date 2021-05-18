import {combineReducers} from 'redux';
import countReducer from './countReducer.js';

const allReducers = combineReducers({count: countReducer});

export default allReducers;
