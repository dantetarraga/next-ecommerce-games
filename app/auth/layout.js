'use client'

import Link from 'next/link'
import style from './auth-layout.module.scss'
import { Icon, Image } from 'semantic-ui-react'

const AuthLayout = ({ children }) => {
  return (
    <section className={style.container}>
      <div className={style.toBar}>
        <Link href='/'>
          <Image src='/logo.png' alt='logo gaming' />
        </Link>

        <Link href='/'>
          <Icon name='close' />
        </Link>
      </div>

      <div className={style.blockLeft}>{children}</div>

      <div className={style.blockRight} />
    </section>
  )
}

export default AuthLayout
