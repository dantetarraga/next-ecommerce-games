import { useEffect, useState } from 'react'
import styles from './BannerLastGame.module.scss'
import { Game } from '../api/game'
import { Container, Image } from 'semantic-ui-react'
import Link from 'next/link'
import { DateTime } from 'luxon'
import { calcDiscount } from '@/utils/calcDiscount'
import Discount from '@/components/Discount/Discount'

const BannerLastGame = () => {
  const [game, setGame] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await Game.getLastPublishedGame()
      setGame(response.data[0])
    })()
  }, [])

  if (!game) { return null }

  const wallpaper = game.attributes.wallpaper
  const releaseDate = new Date(game.attributes.releaseDate).toISOString()
  const price = calcDiscount(game.attributes.price, game.attributes.discount)

  return (
    <div className={styles.container}>
      <Image className={styles.wallpaper} src={wallpaper.data.attributes.url} alt='Wallpaper' />

      <Link className={styles.infoContainer} href={game.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
          </span>

          <h2>{game.attributes.title}</h2>

          <p className={styles.price}>
            <Discount>{game.attributes.discount}%</Discount>
            <span className={styles.finalPrice}>${price}</span>
          </p>
        </Container>
      </Link>

    </div>
  )
}

export default BannerLastGame
