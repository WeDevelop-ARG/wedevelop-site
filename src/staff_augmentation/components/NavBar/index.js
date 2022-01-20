import { useState, useEffect } from 'react'
import InternalLink from 'main_app/components/InternalLink'
import classnames from 'classnames'

import Logo from 'main_app/components/Logo'
import Button from 'main_app/components/Button'

import useOverlappingObserver from 'utils/use_overlapping_observer'

import classes from './styles.module.scss'

function NavBar ({
  landingName,
  handleModal,
  backgroundColor,
  ctaDescription,
  buttonLabel
}) {
  const [atScrollTop, observerRef] = useOverlappingObserver({
    root: document.body,
    ignoreHeight: true,
    defaultValue: null
  })
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (atScrollTop !== null) setInitialized(true)
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
      <InternalLink
        href='#top'
        className={classes.logoLink}
        smooth
      >
        <Logo width='203' height='46' />
      </InternalLink>
      <nav className={classes.menu}>
        <div className={classes.bubble}>
          <span className={classes.tagName} style={{ color: backgroundColor }}>{landingName}</span>
          <p className={classes.descriptionText}>{ctaDescription}</p>
        </div>
        <Button
          variant='primary'
          className={classes.freeQuoteButton}
          onClick={handleModal}
        >
          {buttonLabel}
        </Button>
      </nav>
    </header>
  )
}

export default NavBar
