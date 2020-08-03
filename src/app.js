import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

// const store = createStore((state = { value: '' }) => {
//     return state;
// })

const store = configureStore();

//console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

