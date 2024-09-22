import { useEffect } from 'react'
import { Game } from '../api/game'

const LatestGames = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    (async () => {
      const response = await Game.getLatestGames({ limit: 9 })
      setGames(response.data)
    })()
  }, [])

  if (!games.length) { return null }

  return (
    <div>LatestGames</div>
  )
}

export default LatestGames
