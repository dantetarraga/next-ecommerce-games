import Link from 'next/link'
import style from './sign-up.module.scss'

const SignUp = () => {
  return (
    <div className={style.signUp}>
      <h3>Crear cuenta</h3>

      {/* FORM */}

      <div className={style.actions}>
        <Link href='/auth/sign-in'>Atras</Link>
      </div>
    </div>
  )
}

export default SignUp
