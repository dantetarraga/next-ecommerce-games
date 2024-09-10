'use server'

import { ENV } from '@/utils'

export async function getPlatforms () {
  const url = `${ENV.API_URL}${ENV.ENDPOINTS.PLATFORMS}?populate=icon`
  const response = await fetch(url)
  const data = await response.json()
  return data.data
}
