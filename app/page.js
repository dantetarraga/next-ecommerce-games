'use client'

import { useAuthStore } from '@/store'
import { useRouter } from 'next/navigation'
import { Button } from 'semantic-ui-react'

export default function Home () {
  const router = useRouter()
  const onLogout = useAuthStore(state => state.onLogout)
  const user = useAuthStore(state => state.user)

  const onClick = () => router.push('/auth/sign-in')

  return (
    <div>
      <h1>Welcome {user?.name}</h1>

      <Button primary onClick={onClick}>Button</Button>
      <Button onClick={onLogout}>Cerrar sesion</Button>
    </div>
  )
}
