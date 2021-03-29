import { useMemo } from 'react'

import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'

import classes from './styles.module.scss'

import Header from './components/Header'
import ContactForm from 'contact_us/components/ContactForm'
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
        <ContactForm />
      </article>
      <Footer />
    </>
  )
}

export default Landing
