import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import classnames from 'classnames'

import { IS_STATIC_RENDERER } from 'main_app/constants'

import Logo from 'main_app/components/Logo'
import Button from 'main_app/components/Button'

import useOverlappingObserver from 'utils/use_overlapping_observer'

import classes from './styles.module.scss'

function NavBar ({
  landingName,
  handleModal,
  backgroundColor
}) {
  const [atScrollTop, observerRef] = useOverlappingObserver({
    root: document.body,
    ignoreHeight: true,
    defaultValue: null
  })
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (atScrollTop !== null && !IS_STATIC_RENDERER) setInitialized(true)
  }, [atScrollTop])

  return (
    <header
      ref={observerRef}
      aria-hidden={atScrollTop !== false}
      className={classnames(classes.navBar, {
        [classes.navBarHidden]: atScrollTop === true,
        [classes.initialized]: initialized
      })}
    >
      <HashLink
        to='#top'
        className={classes.logoLink}
        smooth
      >
        <Logo
          className={classes.logo}
        />
      </HashLink>
      <nav className={classes.menu}>
        <div className={classes.bubble}>
          <span className={classes.tagName} style={{ color: backgroundColor }}>{landingName}</span>
          <p className={classes.descriptionText}>Sign Up to Get Rates & Available Staff Details</p>
        </div>
        <Button
          variant='primary'
          className={classes.freeQuoteButton}
          onClick={handleModal}
        >
          Get a Free Quote
        </Button>
      </nav>
    </header>
  )
}

export default NavBar
