import React from 'react'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import configureStore from './shared/store/configureStore'
import { getAccount } from './shared/actions/index'
import App from './shared/App'

const store = configureStore()

// store.dispatch(getAccount())

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)

module.hot.accept();
