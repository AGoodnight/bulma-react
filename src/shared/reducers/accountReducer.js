// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import { ActionDictionary as constants } from '../constants/actions'
import initialState from './initialState'

const accountReducer = (state = initialState.account, action) => {

  switch (action.type) {

    case constants.ACTIONS.LOGIN.SUCCESS: {
      return Object.assign({},state,{
        ...action.data
      })
    }

    default:
      return state
  }
}

export default accountReducer
