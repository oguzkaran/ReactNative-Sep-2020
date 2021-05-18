import React, {Component} from 'react';
import allReducers from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import LoginForm from './components/LoginForm.js';

const store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
