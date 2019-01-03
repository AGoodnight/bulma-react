
const ActionDictionary = {
  ACTIONS: {
    LOGIN: {
      SUCCESS: 'LOGIN_SUCCESS'
    },
    APPS: {
      REQUEST_APPS: 'REQUEST_APPS',
      RECEIVE_APPS: 'RECEIVE_APPS'
    }
  },
  FETCH: {
    SUCCESS: 'FETCH_SUCCESS',
    ERROR: 'FETCH_ERROR'
  },
  URI: {
    API: {
      LOGIN: `/api/v1/login`,
      LOGOUT: `/api/v1/logout`
    }
  }
}

export { ActionDictionary }
