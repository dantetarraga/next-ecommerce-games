import { Token } from '@/app/api'

export async function authFetch (url, params) {
  const token = Token.getToken()

  if (!token) {
    throw new Error('No token found')
  }
}
