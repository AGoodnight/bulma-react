import { ActionDictionary as constants } from '../constants/actions'
import initialState from './initialState'

const appsReducer = ( state = initialState.apps, action) => {
  switch (action.type) {
    case constants.ACTIONS.APPS.REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case constants.ACTIONS.APPS.RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        apps: action.apps
      });
    default:
      return state
  }
}

export default appsReducer
