'use client'

import styles from './Account.module.scss'
import { Button, Icon, Label } from 'semantic-ui-react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store'

const total = 5

const Account = () => {
  const user = useAuthStore(state => state.user)
  const router = useRouter()

  const goToLogin = () => router.push('/auth/sign-in')
  const goToAccount = () => router.push('/account')

  const goToCart = () => {
    if (!user) goToLogin()
    else router.push('/cart')
  }

  return (
    <div className={styles.account}>
      <Button icon className={styles.cart} onClick={goToCart}>
        <Icon name='cart' />
        {total > 0 && <Label circular color='red'>{total}</Label>}
      </Button>

      {
        !user
          ? (
            <Button icon>
              <Icon name='user' onClick={goToLogin} />
            </Button>
            )
          : (
            <Button icon className={styles.user}>
              <Icon name='user outline' onClick={goToAccount} />
            </Button>
            )
      }
    </div>
  )
}

export default Account
