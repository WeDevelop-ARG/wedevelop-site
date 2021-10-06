import { HashLink } from 'react-router-hash-link'

import Logo from 'main_app/components/Logo'
import Button from 'main_app/components/Button'

import useMediaQuery from 'utils/use_media_query'
import { forTabletDown } from 'styles/media_queries'

import classes from './styles.module.scss'

function NavBar () {
  const isTabletDown = useMediaQuery(forTabletDown)

  return (
    <section id='follow-up-navbar' className={classes.navBar}>
      <HashLink
        to='#top'
        className={classes.logoLink}
        smooth
      >
        <Logo
          variant='color'
          mobile={isTabletDown}
          className={classes.logo}
        />
      </HashLink>
      <nav className={classes.menu}>
        <Button
          variant={['secondary', ...(isTabletDown ? ['light'] : ['dark'])]}
          className={classes.skipButton}
        >
          Skip
        </Button>
      </nav>
    </section>
  )
}

export default NavBar
