import {createStore, combineReducers} from 'redux';
import countReducer from '../reducers/countReducer.js'

const reducer = combineReducers({count : countReducer})

const setupStore = () => createStore(reducer)

export default setupStore
