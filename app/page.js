'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'semantic-ui-react'

export default function Home () {
  const router = useRouter()

  const onClick = () => router.push('/auth/sign-in')

  return (
    <div>
      <Button primary onClick={onClick}>Button</Button>
    </div>
  )
}
