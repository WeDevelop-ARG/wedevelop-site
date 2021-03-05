import { useCallback, useEffect, useState } from 'react'
import classnames from 'classnames'

import SVGIcon from '../SVGIcon'

import MainMenu from './MainMenu'

import classes from './styles.module.scss'

function NavBar () {
  // TODO: add accessibility https://react-spectrum.adobe.com/react-aria/useMenuTrigger.html
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => {
    setMenuOpen(v => !v)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.classList.add(classes.bodyMenuOpen)
    else document.body.classList.remove(classes.bodyMenuOpen)

    return () => {
      document.body.classList.remove(classes.bodyMenuOpen)
    }
  }, [menuOpen])

  useEffect(() => {
    document.getElementById('root')?.classList.add(classes.rootWithNavBar)

    return () => {
      document.getElementById('root')?.classList.remove(classes.rootWithNavBar)
    }
  }, [])

  return (
    <header className={classnames(classes.header, { [classes.menuOpen]: menuOpen })}>
      <SVGIcon
        name='logo'
        variant='hexagon'
        className={classnames(classes.logo, { [classes.menuOpen]: menuOpen })}
      />
      <nav>
        <button
          type='button'
          onClick={toggleMenu}
          className={classes.menuToggle}
        >
          {menuOpen && <SVGIcon name='nav_bar/close_x' className={classes.close} />}
          {!menuOpen && <SVGIcon name='nav_bar/hamburguer_menu' className={classes.open} />}
        </button>
        <MainMenu isOpen={menuOpen} className={classes.menu} />
      </nav>
    </header>
  )
}

export default NavBar
