import { jwtDecode } from 'jwt-decode'

export class Token {
  static setToken (token) {
    localStorage.setItem('access-token', token)
  }

  static getToken () {
    return localStorage.getItem('access-token')
  }

  static removeToken () {
    localStorage.removeItem('access-token')
  }

  static hasExpired (token) {
    const tokenDecode = jwtDecode(token)
    const expiredDate = tokenDecode.exp * 1000
    const currentDate = new Date().getTime()

    if (currentDate > expiredDate) {
      return true
    }

    return false
  }
}
