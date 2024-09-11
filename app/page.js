'use client'

import { useAuthStore } from '@/store'
import { useRouter } from 'next/navigation'
import { Button } from 'semantic-ui-react'

export default function Home () {
  const router = useRouter()
  const onLogout = useAuthStore(state => state.onLogout)
  const user = useAuthStore(state => state.user)

  const onClick = () => router.push('/account/info')
  const onClick2 = () => router.push('/account')

  return (
    <div>
      {/* <h1>Welcome {user?.name}</h1>

<Button onClick={onLogout}>Cerrar sesion</Button> */}
      <Button primary onClick={onClick}>Button</Button>
      <button style={{ marginTop: '100px' }} onClick={onClick}>Cuenta</button>
      <button style={{ marginTop: '100px' }} onClick={onClick2}>Cuenta</button>
    </div>
  )
}
