import { forwardRef, useCallback, useState } from 'react'
import classnames from 'classnames'

import useOverlappingObserver from 'utils/use_overlapping_observer'
import useElementClass from 'utils/use_element_class'
import useVariants from 'utils/use_variants'

import SVGIcon from '../SVGIcon'

import MainMenu from './MainMenu'

import classes from './styles.module.scss'
import useCombinedRefs from 'utils/use_combined_refs'
import { HashLink } from 'react-router-hash-link'

function NavBar ({ variant }, ref) {
  // TODO: add accessibility https://react-spectrum.adobe.com/react-aria/useMenuTrigger.html
  const [menuOpen, setMenuOpen] = useState(false)
  const [atTop, observerRef] = useOverlappingObserver({
    root: document.body,
    ignoreHeight: true
  })
  const containerRef = useCombinedRefs(ref, observerRef)
  const variantClassNames = useVariants(classes, variant, { prefix: 'variant_' })
  const toggleMenu = useCallback(() => {
    setMenuOpen(v => !v)
  }, [])
  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  useElementClass(document.getElementById('root'), classes.rootWithNavBar)
  useElementClass(document.body, classnames({ [classes.bodyMenuOpen]: menuOpen }))

  return (
    <header
      ref={containerRef}
      className={classnames(classes.header, variantClassNames, {
        [classes.menuOpen]: menuOpen,
        [classes.atTop]: atTop
      })}
    >
      <HashLink
        to={{ path: '/', hash: '#top' }}
        smooth
      >
        <SVGIcon
          name='logo'
          variant='hexagon'
          className={classes.logo}
        />
      </HashLink>
      <nav>
        <button
          type='button'
          onClick={toggleMenu}
          className={classes.menuToggle}
        >
          {menuOpen && <SVGIcon name='nav_bar/close_x' className={classes.close} />}
          {!menuOpen && <SVGIcon name='nav_bar/hamburguer_menu' className={classes.open} />}
        </button>
        <MainMenu
          isOpen={menuOpen}
          onRequestClose={closeMenu}
          className={classes.menu}
        />
      </nav>
    </header>
  )
}

export default forwardRef(NavBar)
