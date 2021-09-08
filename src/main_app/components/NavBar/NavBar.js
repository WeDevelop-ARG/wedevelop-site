import { forwardRef, useCallback, useMemo, useState } from 'react'
import classnames from 'classnames'
import { HashLink } from 'react-router-hash-link'

import useOverlappingObserver from 'utils/use_overlapping_observer'
import useElementClass from 'utils/use_element_class'
import useVariants, { combineVariants, isVariant } from 'utils/use_variants'
import useCombinedRefs from 'utils/use_combined_refs'
import useMediaQuery from 'utils/use_media_query'

import { forDesktopUp } from 'styles/media_queries'

import SVGIcon from '../SVGIcon'

import MainMenu from './MainMenu'
import Logo from '../Logo'

import classes from './styles.module.scss'

function NavBar ({
  variant,
  variantAtScrollTop,
  show = true,
  pathLogo = '/#top',
  hideMenu = false,
  contactPagePath = '/contact'
}, ref) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [atScrollTop, observerRef] = useOverlappingObserver({
    root: document.body,
    ignoreHeight: true
  })
  const containerRef = useCombinedRefs(ref, observerRef)

  variant = useMemo(() => {
    if (atScrollTop && variantAtScrollTop) return variantAtScrollTop

    return variant
  }, [atScrollTop, variant, variantAtScrollTop])
  variant = useMemo(() => {
    if (atScrollTop) return variant

    return combineVariants(variant, 'scroll')
  }, [atScrollTop, variant])

  const logoVariant = useMemo(() => {
    if (isVariant(variant, 'light')) return 'white'

    return 'color'
  }, [variant])

  const variantClassNames = useVariants(classes, variant, {
    prefix: 'variant_',
    defaults: {
      solid: variants => !isVariant(variants, 'transparent'),
      dark: variants => !isVariant(variants, 'light'),
      'light-bg': variants => !isVariant(variants, 'dark-bg')
    }
  })
  const toggleMenu = useCallback(() => {
    setMenuOpen(v => !v)
  }, [])
  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])
  const isDesktopUp = useMediaQuery(forDesktopUp)

  useElementClass(document.getElementById('root'), classes.rootWithNavBar)
  useElementClass(document.body, classnames({ [classes.bodyMenuOpen]: menuOpen }))

  return (
    <header
      ref={containerRef}
      aria-hidden={!show}
      className={classnames(classes.header, variantClassNames, {
        [classes.menuOpen]: menuOpen,
        [classes.atTop]: atScrollTop,
        [classes.hidden]: !show
      })}
    >
      <HashLink
        to={pathLogo}
        className={classes.logoLink}
        smooth
      >
        <Logo
          menuOpen={menuOpen}
          variant={logoVariant}
          className={classes.logo}
        />
      </HashLink>
      {!hideMenu && (
        <nav className={classes.nav}>
          <button
            type='button'
            onClick={toggleMenu}
            className={classes.menuToggle}
          >
            {menuOpen && <SVGIcon name='nav_bar/close_x' className={classes.close} />}
            {!menuOpen &&
              <SVGIcon
                name='nav_bar/hamburguer_menu'
                className={
                  classnames(classes.open, {
                    [classes.white]: isVariant(variant, 'light')
                  })
                }
              />}
          </button>
          <MainMenu
            isOpen={isDesktopUp || menuOpen}
            onRequestClose={closeMenu}
            className={classes.menu}
            variant={variant}
            contactPagePath={contactPagePath}
          />
        </nav>)}
    </header>
  )
}

export default forwardRef(NavBar)
