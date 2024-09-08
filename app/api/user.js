import { ENV } from '@/utils'
import { Token } from './token'

export class User {
  static async getMe () {
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.USER_ME}`
    const params = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token.getToken()}`
      }
    }

    try {
      const response = await fetch(url, params)
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Error during getMe')
      }

      console.log(result)
      return result
    } catch (error) {
      console.error('Error during getMe:', error)
      throw error
    }
  }
}
