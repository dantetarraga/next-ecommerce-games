import { ENV } from '@/utils'

export class Game {
  static async getLastPublishedGame () {
    const sort = 'sort=publishedAt:desc'
    const pagination = 'pagination[limit]=1'
    const populate = 'populate=*'

    const url = `${ENV.API_URL}${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`

    const response = await fetch(url)
    return await response.json()
  }

  static async getLatestGames ({ limit = 9, platformId = null }) {
    const filterPlatform = platformId && `filter[platform][id][$eq]=${platformId}`
    const pagination = `pagination[limit]=${limit}`
    const sort = 'sort=publisedAt:desc'
    const populate = 'populate=*'

    const urlPArams = `${sort}&${pagination}&${filterPlatform}&${populate}`

    const url = `${ENV.API_URL}${ENV.ENDPOINTS.GAME}?${urlPArams}`

    const response = await fetch(url)
    return await response.json()
  }
}
