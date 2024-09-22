import { Token } from '@/app/api'

export async function authFetch (url, params) {
  const token = Token.getToken()
  console.log('acces', token.state.token)

  const logout = () => {
    Token.removeToken()
    window.location.replace('/')
  }

  if (!token) {
    logout()
  } else {
    if (Token.hasExpired(token)) {
      logout()
    } else {
      const paramsTemp = {
        ...params,
        haders: {
          ...params?.headers,
          Authorization: `Bearer ${token}`
        }
      }

      try {
        return await fetch(url, paramsTemp)
      } catch (error) {
        return error
      }
    }
  }
}
