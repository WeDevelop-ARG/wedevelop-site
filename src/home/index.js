import { useRouteMatch } from 'react-router-dom'

import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import Header from './components/Header'
import OurPeople from './components/OurPeople'
import FullSizeCTA from 'main_app/components/FullSizeCTA'
import Skills from './components/Skills'
import Services from './components/Services'
import Methodologies from './components/Methodologies'
import JoinUs from './components/JoinUs'
import Footer from 'main_app/components/Footer'

import usePageMetadata from 'utils/marketing/use_page_metadata'
import ContactModal from 'main_app/components/ContactModal'

function Landing () {
  usePageMetadata({
    title: 'A Human-Centered Company that Gets Things Done',
    description: 'We are a digital product agency that delivers meaningful experiences to clients and users all over the world.'
  })
  const match = useRouteMatch('/contact')

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'dark']}
      />
      <Article>
        <Header />
        <Services />
        <Methodologies />
        <Skills />
        <OurPeople />
        <JoinUs />
        <FullSizeCTA
          title='Schedule a call with us'
          subTitle='Get in touch'
          ctaText='Contact Us'
          ctaToPath='/contact#top'
          ctaIncentive='We typically get back to you within an hour.'
        />
      </Article>
      {match?.isExact && <ContactModal isOpen />}
      <Footer variant='light' />
    </>
  )
}

export default Landing
