'use client'

import Link from 'next/link'
import style from './sign-in.module.scss'
import { LoginForm } from '../components'

const SignIn = () => {
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
