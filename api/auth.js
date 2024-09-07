import { ENV } from '@/utils'

export class Auth {
  static async register (data) {
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.AUTH.REGISTER}`
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    try {
      const response = await fetch(url, params)
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Error during registration')
      }

      return result
    } catch (error) {
      console.error('Error during registration:', error)
      throw error
    }
  }
}
