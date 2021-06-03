import { useMemo } from 'react'

import NavBar from 'main_app/components/NavBar'

import Header from './components/Header'
import Skills from './components/Skills'
import Article from 'main_app/components/Article'

import useOverlappingObserver from 'utils/use_overlapping_observer'
import usePageMetadata from 'utils/marketing/use_page_metadata'

function Landing () {
  usePageMetadata({
    title: 'A Human-Centered Company that Gets Things Done',
    description: 'We are a digital product agency that delivers meaningful experiences to clients and users all over the world.'
  })
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
        <Skills />
      </Article>
    </>
  )
}

export default Landing
