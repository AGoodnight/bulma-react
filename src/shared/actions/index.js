import { Api as api } from '../apis/index'
import { ActionDictionary as constants } from '../constants/actions'

const success = (data) => ({
  type: constants.ACTIONS.LOGIN.SUCCESS, data
})

const requestApps = (data) => ({
  type: ACTIONS.APPS.REQUEST_APPS
})

const receiveApps = (data) => ({
  type: ACTIONS.APPS.RECEIVE_APPS,
  apps: data
})

export const fetchAppsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchApps(getState())) {
      return dispatch(fetchApps())
    }
  }
}

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

function shouldFetchApps(state) {
  const apps = state.apps
  if (apps.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}
