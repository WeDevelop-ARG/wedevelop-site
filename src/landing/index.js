import { useMemo } from 'react'

import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'

import classes from './styles.module.scss'

import Header from './components/Header'
import WhatAreYouLookingFor from './components/WhatAreYouLookingFor'
import OurTeam from './components/OurTeam'
import LetsTalk from './components/LetsTalk'
import useOverlappingObserver from 'utils/use_overlapping_observer'

function Landing () {
  const [isNavBarOverHeader, navBarRef, headerRef] = useOverlappingObserver({
    root: document.body,
    ignoreHeight: true
  })
  const navBarVariant = useMemo(() => {
    if (isNavBarOverHeader) return ['transparent', 'light']

    return ['solid', 'light']
  }, [isNavBarOverHeader])

  return (
    <>
      <NavBar ref={navBarRef} variant={navBarVariant} />
      <article className={classes.article}>
        <Header ref={headerRef} />
        <WhatAreYouLookingFor />
        <OurTeam />
        <LetsTalk />
      </article>
      <Footer />
    </>
  )
}

export default Landing
