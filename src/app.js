import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'regenerator-runtime/runtime'
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
)
