'use client'

import styles from './Account.module.scss'
import { useUiStore } from '@/store'
import { useEffect } from 'react'
import { Container, Tab, TabPane } from 'semantic-ui-react'
import { ChangeNameForm, Info } from './components'
import { Separator } from '@/components'
import ChangeEmailForm from './components/settings/ChangeEmailForm'

const Account = () => {
  const setIsRelative = useUiStore((state) => state.setIsRelative)

  useEffect(() => {
    setIsRelative(true)
  }, [])

  const panes = [
    {
      menuItem: 'Mis pedidos',
      render: () => (
        <TabPane attached={false}>
          <h1>Mis pedidos</h1>
        </TabPane>
      )
    },
    {
      menuItem: 'Lista de deseos',
      render: () => (
        <Tab.Pane attached={false}>
          <h1>Mi lista de deseos</h1>
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Direcciones',
      render: () => (
        <TabPane attached={false}>
          <h1>Mis direcciones</h1>
        </TabPane>
      )
    },
    {
      menuItem: { icon: 'settings', content: 'Ajustes' },
      render: () => (
        <TabPane attached={false}>
          <ChangeNameForm />
          <ChangeEmailForm />
          <Separator height={80} />
        </TabPane>
      )
    },
    {
      menuItem: {
        icon: 'logout',
        content: '',
        onClick: () => {
          console.log('Logout')
        }
      }
    }
  ]

  return (
    <Container>
      <Info />

      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={panes}
        className={styles.tabs}
      />
    </Container>
  )
}

export default Account
