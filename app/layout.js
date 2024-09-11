'use client'

import 'semantic-ui-css/semantic.min.css'
import '@/scss/global.scss'
import styles from './main-layout.module.scss'
import { Container } from 'semantic-ui-react'
import { useUiStore } from '@/store'
import cn from 'classnames'
import { Footer, TopBar } from '@/ui'

export default function RootLayout ({ children }) {
  const isContainer = useUiStore(state => state.isContainer)
  const relative = useUiStore(state => state.isRelative)

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
