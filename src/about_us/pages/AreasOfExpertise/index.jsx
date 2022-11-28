import { useRouter } from 'next/router'
import { useCallback } from 'react'

import TestimonialsContainer from 'about_us/components/TestimonialsContainer'
import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import NavBar from 'main_app/components/NavBar'
import PageMetadata from 'utils/marketing/PageMetadata'
import AreasOfExpertiseHero from '../../components/AreasOfExpertiseHero'

export default function AreasOfExpertise () {
  const contactPagePath = '/about-us/areas-of-expertise/contact'
  const { pathname, push } = useRouter()
  const handleClose = useCallback(() => {
    push('/about-us/areas-of-expertise/', undefined, { shallow: true, scroll: false })
  }, [push])

  return (
    <>
      <PageMetadata
        title='Areas of Expertise'
        description='We help companies innovate and scale by embracing the latest technologies and resources'
      />
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <AreasOfExpertiseHero />
        <TestimonialsContainer />
        <GetInTouch
          heading='Get In Touch'
          title='Time to hire top talent now!'
          description=''
          ctaButtonText='Contact Us'
          contactPagePath={contactPagePath}
        />
      </Article>
      {contactPagePath === pathname && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer />
    </>
  )
}
