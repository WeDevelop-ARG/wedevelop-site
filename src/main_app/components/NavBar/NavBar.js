import { forwardRef, useCallback, useMemo, useState, useEffect } from 'react'
import classnames from 'classnames'
import InternalLink from 'main_app/components/InternalLink'

import useOverlappingObserver from 'utils/use_overlapping_observer'
import useElementClass from 'utils/use_element_class'
import useVariants, { combineVariants, isVariant } from 'utils/use_variants'
import useCombinedRefs from 'utils/use_combined_refs'
import useMediaQuery from 'utils/use_media_query'
import { IS_STATIC_RENDERER } from 'main_app/constants'

import { forDesktopUp, forTabletDown } from 'styles/media_queries'

import SVGIcon from '../SVGIcon'

import MainMenu from './MainMenu'
import Logo from '../Logo'

import classes from './styles.module.scss'
import { isUndefined } from 'lodash'

function NavBar ({
  variant,
  variantAtScrollTop,
  show = true,
  pathLogo = '/#top',
  hideMenu = false,
  contactPagePath = '/contact'
}, ref) {

  console.log(variant, variantAtScrollTop,show)

  const [menuOpen, setMenuOpen] = useState(false)
  const [atScrollTop, observerRef] = useOverlappingObserver({
    root: globalThis.document?.body,
    ignoreHeight: true,
    defaultValue: null
  })
  const [initialized, setInitialized] = useState(false)
  const containerRef = useCombinedRefs(ref, observerRef)
  const isDesktopUp = useMediaQuery(forDesktopUp)
  const isTabletDown = useMediaQuery(forTabletDown)

  useEffect(() => {
    if (atScrollTop !== null && !IS_STATIC_RENDERER) setInitialized(true)
  }, [atScrollTop])

  variant = useMemo(() => {
    if (atScrollTop !== false && variantAtScrollTop) return variantAtScrollTop

    return variant
  }, [atScrollTop, variant, variantAtScrollTop])
  variant = useMemo(() => {
    if (atScrollTop !== false) return variant

    return combineVariants(variant, 'scroll')
  }, [atScrollTop, variant])

  const logoVariant = useMemo(() => {
    let logoVariant

    if (isTabletDown) logoVariant = combineVariants(logoVariant, 'isologo')
    else logoVariant = combineVariants(logoVariant, 'full')

    if (!menuOpen && isVariant(variant, 'light')) {
      logoVariant = combineVariants(logoVariant, 'white')
    } else {
      logoVariant = combineVariants(logoVariant, 'color')
    }

    return logoVariant
  }, [variant, isTabletDown, menuOpen])

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

  if(!isUndefined(globalThis.document)){
    useElementClass(document.getElementById('__next'), classes.rootWithNavBar)
    useElementClass(document.body, classnames({ [classes.bodyMenuOpen]: menuOpen }))
  }

  return (
    <header
      ref={containerRef}
      aria-hidden={!show || !initialized}
      className={classnames(classes.header, variantClassNames, {
        [classes.menuOpen]: menuOpen,
        [classes.atTop]: atScrollTop,
        [classes.hideMenu]: hideMenu,
        [classes.hidden]: !show && initialized,
        [classes.initialized]: initialized
      })}
    >
      <InternalLink
        href={pathLogo}
        className={classes.logoLink}
        smooth
      >
        <Logo
          variant={logoVariant}
          className={classes.logo}
          loading='eager'
        />
      </InternalLink>
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
