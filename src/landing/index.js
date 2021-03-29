import { useMemo } from 'react'

import NavBar from 'main_app/components/NavBar'

import classes from './styles.module.scss'

import Header from './components/Header'
import useOverlappingObserver from 'utils/use_overlapping_observer'

function Landing () {
  const [isNavBarOverHeader, navBarRef, headerRef] = useOverlappingObserver({
    root: document.body,
    ignoreHeight: true
  })
  const navBarVariant = useMemo(() => {
    if (isNavBarOverHeader) return ['transparent', 'dark']

    return ['solid', 'dark']
  }, [isNavBarOverHeader])

  return (
    <>
      <NavBar ref={navBarRef} variant={navBarVariant} />
      <article className={classes.article}>
        <Header ref={headerRef} />
      </article>
    </>
  )
}

export default Landing
