export class Token {
  static setToken (token) {
    localStorage.setItem('access-token', token)
  }

  getToken () {
    return localStorage.getItem('access-token')
  }

  hasExpired
}
