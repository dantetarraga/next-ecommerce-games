import Link from 'next/link'
import style from './sign-up.module.scss'
import { RegisterForm } from '../components'

const SignUp = () => {
  return (
    <div className={style.signUp}>
      <h3>Crear cuenta</h3>

      {/* FORM */}
      <RegisterForm />

      <div className={style.actions}>
        <Link href='/auth/sign-in'>Atras</Link>
      </div>
    </div>
  )
}

export default SignUp
