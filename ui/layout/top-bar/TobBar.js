import Link from 'next/link'
import styles from './TopBar.module.scss'
import { Image } from 'semantic-ui-react'
import { Account, Menu } from '@/ui'

const TobBar = (props) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <Link href='/'>
          <Image src='/logo.png' size='small' alt='Games Logo' />
        </Link>
      </div>

      <div className={styles.center}>
        <Menu />
      </div>

      <div className={styles.right}>
        <Account />
      </div>
    </div>
  )
}

export default TobBar
