import { useMemo } from 'react'

import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import Footer from 'main_app/components/Footer'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import Header from './components/Header'
import ReviewCards from './components/ReviewCards'
import GetYourQuote from './components/GetYourQuote'

import useOverlappingObserver from 'utils/use_overlapping_observer'

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
        <ReviewCards />
        <GetYourQuote />
      </Article>
      <Footer variant='light' />
    </>
  )
}

export default StaffAugmentation
