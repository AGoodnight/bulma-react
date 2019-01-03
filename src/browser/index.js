import React from 'react'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import configureStore from '../shared/store/configureStore'
import { getAccount } from '../shared/actions/index'
import App from '../shared/App'

// const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const store = configureStore()
// store.subscribe(()=>{
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })

store.dispatch(getAccount())

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
