import React, {Component} from 'react';
import allReducers from './reducers/index.js';
import Counter from './components/Counter.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(allReducers)

export default class App extends Component {
    render()
    {
        return (
            <Provider store={store}>
                <Counter/>
            </Provider>
        )
    }
}
