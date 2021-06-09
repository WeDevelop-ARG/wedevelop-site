import { useMemo } from 'react'

import NavBar from 'main_app/components/NavBar'

import Article from 'main_app/components/Article'
import Header from './components/Header'
import OurPeople from './components/OurPeople'
import FullSizeCTA from 'staff_augmentation/components/FullSizeCTA'
import Skills from './components/Skills'
import Services from './components/Services'
import Methodologies from './components/Methodologies'
import JoinUs from './components/JoinUs'
import Footer from 'main_app/components/Footer'

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
  const FULLSIZECTA_TITLE = 'Schedule a call with us'
  const FULLSIZECTA_SUBTITLE = 'Get in touch'
  const CTA_TEXT = 'Contact Us'
  const CTA_PATH = '/contact#top'
  const CTA_INCENTIVE = 'We typically get back to you within an hour.'

  return (
    <>
      <NavBar ref={navBarRef} variant={navBarVariant} />
      <Article>
        <Header ref={headerRef} />
        <Services />
        <Methodologies />
        <Skills />
        <OurPeople />
        <JoinUs />
        <FullSizeCTA
          title={FULLSIZECTA_TITLE}
          subTitle={FULLSIZECTA_SUBTITLE}
          ctaText={CTA_TEXT}
          ctaToPath={CTA_PATH}
          ctaIncentive={CTA_INCENTIVE}
        />
      </Article>
      <Footer variant='light' />
    </>
  )
}

export default Landing
