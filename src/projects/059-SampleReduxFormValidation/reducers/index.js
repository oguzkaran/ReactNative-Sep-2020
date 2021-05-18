import {combineReducers} from 'redux';
import {reducer} from 'redux-form';

const reducers = {
  form: reducer,
};

const allReducers = combineReducers(reducers);
export default allReducers;
