import { forwardRef, useCallback, useMemo, useState } from 'react'
import classnames from 'classnames'
import { HashLink } from 'react-router-hash-link'

import useOverlappingObserver from 'utils/use_overlapping_observer'
import useElementClass from 'utils/use_element_class'
import useVariants from 'utils/use_variants'
import useCombinedRefs from 'utils/use_combined_refs'
import useMediaQuery from 'utils/use_media_query'

import { forDesktopUp, forTabletUp } from 'styles/media_queries'

import SVGIcon from '../SVGIcon'

import MainMenu from './MainMenu'
import Logo from '../Logo'

import classes from './styles.module.scss'

function NavBar ({ variant }, ref) {
  // TODO: add accessibility https://react-spectrum.adobe.com/react-aria/useMenuTrigger.html
  const [menuOpen, setMenuOpen] = useState(false)
  const [atTop, observerRef] = useOverlappingObserver({
    root: document.body,
    ignoreHeight: true
  })
  const containerRef = useCombinedRefs(ref, observerRef)
  const variantClassNames = useVariants(classes, variant, {
    prefix: 'variant_',
    defaults: {
      solid: variants => !variants.includes('transparent'),
      dark: variants => !variants.includes('light'),
      'light-bg': variants => !variants.includes('dark-bg')
    }
  })
  const toggleMenu = useCallback(() => {
    setMenuOpen(v => !v)
  }, [])
  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])
  const isTabletUp = useMediaQuery(forTabletUp)
  const isDesktopUp = useMediaQuery(forDesktopUp)
  const logoVariant = useMemo(() => {
    if (isTabletUp) return 'full'
    else return 'hexagon'
  }, [isTabletUp])

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
        to='/#top'
        className={classes.logoLink}
        smooth
      >
        <Logo
          variant={logoVariant}
          className={classes.logo}
        />
      </HashLink>
      <svg width='0' height='0' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <linearGradient id='NavBarLogoGradient'>
          <stop offset='0%' className={classes.logoGradientStop0} />
          <stop offset='100%' className={classes.logoGradientStop100} />
        </linearGradient>
      </svg>
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
          isOpen={isDesktopUp || isTabletUp || menuOpen}
          onRequestClose={closeMenu}
          className={classes.menu}
        />
      </nav>
    </header>
  )
}

export default forwardRef(NavBar)
