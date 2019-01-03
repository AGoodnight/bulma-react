import fetch from 'isomorphic-fetch'
import { ActionDictionary as constants } from '../constants/actions'

const account = {
  first_name: "Bulma",
  username: "BulmasTheBest",
  email: "bulma@capsulecorp.com"
}

class Api {

  static login(data) {

    // return new Promise((resolve, reject) => {
    //
    //   const encodedURI = encodeURI(`${constants.URI.API.LOGIN}`)
    //
    //   fetch(encodedURI, {
    //     credentials: 'include',
    //     headers: {
    //       'Accept': 'application/json'
    //     },
    //     method: 'POST',
    //     body: JSON.stringify(data)
    //   })
    //   .then((response) => resolve(response.json()))
    //   .catch(err => reject(err))
    // })

    return new Promise((resolve, reject) => {
      resolve({ status: 200, data: account });
    })
  }

  static getAccount(data) {

    // return new Promise((resolve, reject) => {
    //
    //   const encodedURI = encodeURI(`${constants.URI.API.LOGIN}`)
    //
    //   fetch(encodedURI, { credentials: 'include', method: 'GET' })
    //   .then((response) => resolve(response.json()))
    //   .catch(err => reject(err))
    // })
    return new Promise((resolve, reject) => {
      resolve({ status: 200, data: account });
    })
  }

  static logout() {

    // return new Promise((resolve, reject) => {
    //
    //   const encodedURI = encodeURI(`${constants.URI.API.LOGOUT}`)
    //
    //   fetch(encodedURI, { credentials: 'include', method: 'POST' })
    //   .then((response) => resolve(response.json()))
    //   .catch(err => reject(err))
    // })
    return new Promise((resolve, reject) => {
      resolve({});
    })
  }

}

export { Api }
