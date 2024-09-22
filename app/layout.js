'use client'

import 'semantic-ui-css/semantic.min.css'
import '@/scss/global.scss'
import styles from './main-layout.module.scss'
import { Container } from 'semantic-ui-react'
import { useAuthStore, useUiStore } from '@/store'
import cn from 'classnames'
import { Footer, TopBar } from '@/ui'
import { useEffect } from 'react'

export default function RootLayout ({ children }) {
  const { token, onLogout, onLogin } = useAuthStore()
  const isContainer = useUiStore(state => state.isContainer)
  const relative = useUiStore(state => state.isRelative)

  console.log(token)

  useEffect(() => {
    (async () => {
      if (!token) {
        onLogout()
      }

      await onLogin(token)
    })()
  }, [token])

  return (
    <html lang='en'>
      <body>
        <TopBar />

        <Container fluid>
          <div className={cn({ [styles.relative]: relative })}>
            {
              isContainer
                ? <Container> {children}</Container>
                : children
            }
          </div>
        </Container>

        <Footer />
      </body>
    </html>
  )
}
