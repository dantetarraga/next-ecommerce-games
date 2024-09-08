'use client'

import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const Loading = () => {
  return (
    <Segment>
      <Dimmer active>
        <Loader size='medium' />
      </Dimmer>
    </Segment>
  )
}

export default Loading
