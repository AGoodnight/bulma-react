import fetch from 'isomorphic-fetch'
import { ActionDictionary as ACTIONS } from '../constants/actions'

const account = {
  first_name: "Bulma",
  username: "BulmasTheBest",
  email: "bulma@capsulecorp.com"
}

class Api {

  static login(data) {
    return new Promise((resolve, reject) => {
      resolve({ status: 200, data: account });
    })
  }

  static getAccount(data) {
    return new Promise((resolve, reject) => {
      resolve({ status: 200, data: account });
    })
  }

  static logout() {
    return new Promise((resolve, reject) => {
      resolve({});
    })
  }

}

export { Api }
