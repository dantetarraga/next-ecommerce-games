import { ENV } from '@/utils'
import { authFetch } from '@/utils/authFetch'

export class User {
  static async getMe () {
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.USER_ME}`

    try {
      const response = await authFetch(url)
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Error during getMe')
      }

      return result
    } catch (error) {
      console.error('Error during getMe:', error)
      throw error
    }
  }
}
