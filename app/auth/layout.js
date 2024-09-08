'use client'

import Link from 'next/link'
import style from './auth-layout.module.scss'
import { Icon, Image } from 'semantic-ui-react'
import { useEffect } from 'react'
import { useAuthStore } from '@/store'
import { useRouter } from 'next/navigation'

const AuthLayout = ({ children }) => {
  const status = useAuthStore(state => state.status)
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') router.push('/')
  }, [status, router])

  if (status === 'authenticated') return null

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
