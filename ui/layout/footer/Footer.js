import { Button, Container, Image } from 'semantic-ui-react'
import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href='/'>
              <Image src='/logo.png' alt='Logo Games' />
            </Link>
          </div>

          <div>
            <ul>
              <Link href='#'>Terminos y condiciones</Link>
              <Link href='#'>Politicas y privacidad</Link>
              <Link href='#'>Terminos y condiciones</Link>
              <Link href='#'>Contacto</Link>
              <Link href='#'>FAQs</Link>
            </ul>
          </div>

          <div className={styles.socials}>
            <Button as='a' href='#' circular color='facebook' icon='facebook' />
            <Button as='a' href='#' circular color='twitter' icon='twitter' />
            <Button as='a' href='#' circular color='linkedin' icon='linkedin' />
            <Button as='a' href='#' circular color='instagram' icon='instagram' />
            <Button as='a' href='#' circular color='youtube' icon='youtube' />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>© 2024 Games. Todos los derechos reservados.</span>
        </div>
      </Container>
    </div>
  )
}

export default Footer
