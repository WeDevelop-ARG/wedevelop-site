import { HashLink } from 'react-router-hash-link'
import classnames from 'classnames'

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
    ignoreHeight: true
  })

  return (
    <header
      ref={observerRef}
      className={classnames(classes.navBar, {
        [classes.navBarHidden]: atScrollTop
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
      {!atScrollTop && (
        <nav className={classes.menu}>
          <div className={classes.bubble}>
            <span className={classes.tagName} style={{ color: backgroundColor }}>{landingName}</span>
            <p className={classes.descriptionText}>Sign Up to Get Rates & Available Staff Details</p>
          </div>
          <Button
            smooth
            isAnchor
            variant='primary'
            className={classes.freeQuoteButton}
            onClick={handleModal}
          >
            Get a Free Quote
          </Button>
        </nav>)}
    </header>
  )
}

export default NavBar
