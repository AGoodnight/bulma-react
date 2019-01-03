import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import accountReducer from './accountReducer'
import appsReducer from './appsReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  account: accountReducer,
  apps: appsReducer
})

export default rootReducer
