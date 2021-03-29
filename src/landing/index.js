import { useMemo } from 'react'

import NavBar from 'main_app/components/NavBar'

import Header from './components/Header'
import Article from 'main_app/components/Article'

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
      <Article>
        <Header ref={headerRef} />
      </Article>
    </>
  )
}

export default Landing
