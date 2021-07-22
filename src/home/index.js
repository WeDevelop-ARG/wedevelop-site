import NavBar from 'main_app/components/NavBar'

import Article from 'main_app/components/Article'
import Header from './components/Header'
import OurPeople from './components/OurPeople'
import Skills from './components/Skills'
import Services from './components/Services'
import Methodologies from './components/Methodologies'
import GetInTouch from './components/GetInTouch'
import Footer from 'main_app/components/Footer'

import usePageMetadata from 'utils/marketing/use_page_metadata'

function Landing () {
  usePageMetadata({
    title: 'A Human-Centered Company that Gets Things Done',
    description: 'We are a digital product agency that delivers meaningful experiences to clients and users all over the world.'
  })

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
        <GetInTouch />
      </Article>
      <Footer variant='light' />
    </>
  )
}

export default Landing
