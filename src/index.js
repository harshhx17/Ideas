import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Reducers/reducers'

// import { Router, browserHistory as history } from 'react-router'
// import routes from './routes'

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App />
    </Provider>
    , document.getElementById('root'))
