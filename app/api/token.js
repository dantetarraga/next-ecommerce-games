import { jwtDecode } from 'jwt-decode'

export class Token {
  static setToken (token) {
    localStorage.setItem('access-token', token)
  }

  static getToken () {
    const storedData = localStorage.getItem('access-token')
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      return parsedData.state.token
    }
    return null
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
