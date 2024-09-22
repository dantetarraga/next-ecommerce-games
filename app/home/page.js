import { Container } from 'semantic-ui-react'
import BannerLastGame from './BannerLastGame'
import LatestGames from './LatestGames'

const HomePage = () => {
  return (
    <>
      <BannerLastGame />

      <Container>
        <LatestGames />
      </Container>
    </>
  )
}

export default HomePage
