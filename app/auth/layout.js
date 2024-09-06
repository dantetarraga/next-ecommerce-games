import style from './auth-layout.module.scss'

const AuthLayout = ({ children }) => {
  return (
    <section className={style.container}>
      Auth Layout
      {children}
    </section>
  )
}

export default AuthLayout
