'use client'

import styles from './Account.module.scss'
import { Button, Icon, Label } from 'semantic-ui-react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store'
import cn from 'classnames'

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

      <Button
        icon
        className={cn({ [styles.user]: !user })}
        onClick={!user ? goToLogin : goToAccount}
      >
        <Icon name='user outline' />
      </Button>
    </div>
  )
}

export default Account
