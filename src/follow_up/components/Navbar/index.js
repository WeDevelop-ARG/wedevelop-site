import Logo from 'main_app/components/Logo'
import Button from 'main_app/components/Button'

import useMediaQuery from 'utils/use_media_query'
import { forTabletDown } from 'styles/media_queries'

import classes from './styles.module.scss'

function NavBar ({ handleModalOpen }) {
  const isTabletDown = useMediaQuery(forTabletDown)

  return (
    <section id='follow-up-navbar' className={classes.navBar}>
      <Logo
        variant={isTabletDown ? 'isologo' : 'color'}
        className={classes.logo}
      />
      <nav className={classes.menu}>
        <Button
          variant={['secondary', isTabletDown ? 'light' : 'dark']}
          className={classes.skipButton}
          onClick={handleModalOpen}
        >
          Skip
        </Button>
      </nav>
    </section>
  )
}

export default NavBar
