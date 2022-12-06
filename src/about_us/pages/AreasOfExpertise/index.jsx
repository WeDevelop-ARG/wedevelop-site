import { useRouter } from 'next/router'
import { useCallback } from 'react'

import GetTheMost from 'about_us/components/GetTheMost'
import IndustriesAndCaseStudies from 'about_us/components/IndustriesCaseStudies'
import ProcessAndMethodologies from 'about_us/components/ProcessAndMethodologies'
import TechProfiles from 'about_us/components/TechProfiles'
import TestimonialsContainer from 'about_us/components/TestimonialsContainer'
import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import NavBar from 'main_app/components/NavBar'
import PageMetadata from 'utils/marketing/PageMetadata'
import AreasOfExpertiseHero from '../../components/AreasOfExpertiseHero'

import classes from './styles.module.scss'

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
      <Article className={classes.mainPage}>
        <AreasOfExpertiseHero />
        <TechProfiles />
        <IndustriesAndCaseStudies />
        <TestimonialsContainer />
        <ProcessAndMethodologies />
        <GetTheMost />
        <GetInTouch
          heading='Get In Touch'
          title='Time to hire top talent now!'
          description=''
          ctaButtonText='Contact Us'
          contactPagePath={contactPagePath}
        />
      </Article>
      {contactPagePath === pathname && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer contactPagePath={contactPagePath} hideContactButton={false} />
    </>
  )
}
