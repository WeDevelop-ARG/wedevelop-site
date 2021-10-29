import { forwardRef, useMemo } from 'react'
import classnames from 'classnames'

import Logo from 'main_app/components/Logo'
import Button from 'main_app/components/Button'

import useOverlappingObserver from 'utils/use_overlapping_observer'
import useCombinedRefs from 'utils/use_combined_refs'
import { combineVariants } from 'utils/use_variants'
import useMediaQuery from 'utils/use_media_query'
import { forTabletDown } from 'styles/media_queries'

import classes from './styles.module.scss'

function NavBar ({ handleModalOpen }, ref) {
  const [atScrollTop, observerRef] = useOverlappingObserver({
    root: document.body,
    ignoreHeight: true,
    defaultValue: null
  })
  const containerRef = useCombinedRefs(ref, observerRef)
  const isTabletDown = useMediaQuery(forTabletDown)

  const buttonVariant = useMemo(() => {
    let buttonVariant

    if (isTabletDown) buttonVariant = combineVariants(buttonVariant, 'secondary', 'light')

    if (atScrollTop && !isTabletDown) {
      buttonVariant = combineVariants(buttonVariant, 'secondary', 'dark')
    } else {
      buttonVariant = combineVariants(buttonVariant, 'secondary', 'light')
    }

    return buttonVariant
  }, [isTabletDown, atScrollTop])

  return (
    <header
      ref={containerRef}
      id='follow-up-navbar'
      className={classnames(classes.navBar, { [classes.atTop]: atScrollTop && !isTabletDown })}
    >
      <Logo
        variant={isTabletDown ? 'isologo' : 'color'}
        className={classes.logo}
      />
      <nav className={classes.menu}>
        <Button
          variant={buttonVariant}
          className={classes.skipButton}
          onClick={handleModalOpen}
        >
          Skip
        </Button>
      </nav>
    </header>
  )
}

export default forwardRef(NavBar)
