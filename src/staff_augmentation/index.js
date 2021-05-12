import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import CalendlyWidget from 'main_app/components/CalendlyWidget'
import Footer from 'main_app/components/Footer'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import Header from './components/Header'
import GetFreeQuote from './components/GetFreeQuote'

import classes from './styles.module.scss'
import useOverlappingObserver from 'utils/use_overlapping_observer'
import { useMemo } from 'react'
import GetYourQuote from './components/GetYourQuote'

function StaffAugmentation () {
  usePageMetadata({
    title: 'IT Staff Augmentation delivered in 7 days',
    description: 'Stop Interviewing. Start making money. We send you rates and available team within the hour, and make the Staff available to start in 7 days.'
  })

  const [isNavBarAtTop, navBarRef] = useOverlappingObserver({
    root: document.body,
    ignoreHeight: true
  })
  const navBarVariant = useMemo(() => {
    if (isNavBarAtTop) return ['transparent', 'dark']

    return ['solid', 'dark']
  }, [isNavBarAtTop])

  return (
    <>
      <NavBar ref={navBarRef} variant={navBarVariant} />
      <Article>
        <Header />
        <GetFreeQuote />
        <section id='contact' className={classes.wrapper}>
          <div className={classes.fillHeight}>
            <h1 className={classes.titleText}>or schedule a call with us</h1>
            <CalendlyWidget sourcePage='staff-augmentation' />
          </div>
        </section>
        <GetYourQuote />
      </Article>
      <Footer />
    </>
  )
}

export default StaffAugmentation
