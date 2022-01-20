import { forwardRef, useCallback, useMemo, useState, useEffect } from 'react'
import classnames from 'classnames'
import { isUndefined } from 'lodash'
import Image from 'next/image'

import InternalLink from 'main_app/components/InternalLink'

import useOverlappingObserver from 'utils/use_overlapping_observer'
import useElementClass from 'utils/use_element_class'
import useVariants, { combineVariants, isVariant } from 'utils/use_variants'
import useCombinedRefs from 'utils/use_combined_refs'
import useMediaQuery from 'utils/use_media_query'

import { forDesktopUp, forTabletDown } from 'styles/media_queries'

import MainMenu from './MainMenu'
import Logo from '../Logo'

import CloseX from 'assets/nav_bar/close_x.svg'
import HamburguerMenu from 'assets/nav_bar/hamburguer_menu.svg'

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
    root: globalThis.document?.body,
    ignoreHeight: true,
    defaultValue: null
  })
  const [initialized, setInitialized] = useState(false)
  const containerRef = useCombinedRefs(ref, observerRef)
  const isDesktopUp = useMediaQuery(forDesktopUp)
  const isTabletDown = useMediaQuery(forTabletDown)

  useEffect(() => {
    if (atScrollTop !== null) setInitialized(true)
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
      >
        <Logo
          variant={logoVariant}
          height='40'
          loading='eager'
        />
      </InternalLink>
      {!hideMenu && (
        <nav className={classes.nav}>
          <button
            type='button'
            layout='fixed'
            onClick={toggleMenu}
            className={classes.menuToggle}
          >
            {menuOpen && <Image src={CloseX} layout='fixed' width='24' height='24' />}
            {!menuOpen &&
              <Image
                src={HamburguerMenu}
                layout='fixed'
                width='27'
                height='27'
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
