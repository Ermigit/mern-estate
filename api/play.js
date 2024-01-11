import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.js'
import './index.css'
import {store} from './redux/store.js'
import {Provider} from 'react-redux'

ReactDom.createroot(document.getElementById('root')).render(
<Provider store={store}>
    <App/>
</Provider>
)