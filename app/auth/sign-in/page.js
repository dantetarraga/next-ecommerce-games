'use client'

import Link from 'next/link'
import style from './sign-in.module.scss'
import { LoginForm } from '../components'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store'

const SignIn = () => {
  const status = useAuthStore(state => state.status)
  const router = useRouter()

  console.log(status)

  if (status === 'authenticated') {
    router.push('/')
    return
  }

  return (
    <div className={style.signIn}>
      <h3>Iniciar sesión</h3>

      <LoginForm />

      <div className={style.actions}>
        <Link href='/auth/sign-up'>
          ¿No tienes una cuenta?
        </Link>
      </div>
    </div>
  )
}

export default SignIn
