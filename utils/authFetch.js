import { Token } from '@/app/api'

export async function authFetch (url, params) {
  const token = Token.getToken()

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
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`
        }
      }
      console.log(paramsTemp)
      return await fetch(url, paramsTemp)
    }
  }
}
