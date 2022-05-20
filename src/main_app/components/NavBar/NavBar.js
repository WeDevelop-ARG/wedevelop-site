import { forwardRef, useCallback, useMemo, useState, useEffect } from 'react'
import classnames from 'classnames'
import Head from 'next/head'

import Image from 'main_app/components/Image'

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
import HamburguerMenuWhite from 'assets/nav_bar/hamburguer_menu_white.svg'

import classes from './styles.module.scss'

function NavBar ({
  variant,
  variantAtScrollTop,
  show = true,
  pathLogo = '/',
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

  useElementClass(globalThis.document?.body, classnames({ [classes.bodyMenuOpen]: menuOpen }))

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
      <Head>
        <style type='text/css'>
          {'#__next { --rootContentExtraPaddingTop: 70px !important; }'}
        </style>
      </Head>
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
            {menuOpen && <Image src={CloseX} layout='fixed' width='24' height='24' alt='Open menu' />}
            {!menuOpen &&
              <Image
                src={isVariant(variant, 'light') && isVariant(variant, 'transparent') ? HamburguerMenuWhite : HamburguerMenu}
                layout='fixed'
                width='27'
                height='27'
                alt='Open menu'
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
