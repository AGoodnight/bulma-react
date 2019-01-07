import { Api as api } from '../apis/index'
import { ActionDictionary as ACTIONS } from '../constants/actions'

const success = (data) => ({
  type: ACTIONS.LOGIN.SUCCESS, data
})

export const login = data => {

  return dispatch => {

    return api.login(data).then(response => {

      dispatch(success(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}

export const getAccount = () => {

  return dispatch => {

    return api.getAccount().then(response => {

      dispatch(success(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}

export const logout = () => {
  return dispatch => {

    return api.logout().then(response => {

      dispatch(success(response.data))

    }).catch(error => {

      throw(error)
    })
  }
}

function fetchApps() {
  return dispatch => {
    dispatch(requestApps())
    return fetch(`assets/data.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveApps(json)))
  }
}
