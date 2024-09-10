'use client'

import { Image, Icon, Input } from 'semantic-ui-react'
import styles from './Menu.module.scss'
import { useEffect, useState } from 'react'
import { getPlatforms } from '@/app/actions'
import { map } from 'lodash'
import Link from 'next/link'
import cn from 'classnames'

const Menu = (props) => {
  const [platForms, setPlatForms] = useState([])
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    getPlatforms().then(data => setPlatForms(data))
  }, [])

  const openCloseSearch = () => setShowSearch(prevState => !prevState)

  return (
    <div className={styles.platforms}>
      {map(platForms, (platform) => (
        <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
          <Image
            src={platform.attributes.icon.data.attributes.url}
            alt={`Logo ${platform.slug}`}
          />
          {platform.attributes.title}
        </Link>
      ))}

      <button className={styles.search}>
        <Icon name='search' onClick={openCloseSearch} />
      </button>

      <div
        className={cn(styles.inputContainer, { [styles.active]: showSearch })}
      >
        <Input
          id='search-games'
          placeholder='Buscador'
          className={styles.input}
          focus
        />
        <Icon
          name='close'
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>
  )
}

export default Menu
