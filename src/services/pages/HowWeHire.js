import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import NavBar from 'main_app/components/NavBar'
import PageMetadata from 'utils/marketing/PageMetadata'
import PictureWall from 'main_app/components/PictureWall'
import Schedule from 'services/components/schedule'
import Top3PercentageProfessionals from '../components/Top3PercentageProfessionals'

import classes from './services.module.scss'
import OurCulture from 'services/components/OurCulture'

export default function HowWeHire () {
  const SERVICE_NAME = 'how-we-hire'
  const contactPagePath = '/services/how-we-hire/contact'
  const { pathname, push } = useRouter()

  const handleClose = useCallback(async () => {
    await push('/services/how-we-hire', undefined, { shallow: true, scroll: false })
  }, [push])

  return (
    <>
      <PageMetadata
        title='How We Hire'
        description='How We Hire'
      />
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <Top3PercentageProfessionals
          ctaLink={contactPagePath}
        />
        <OurCulture />
        <Schedule
          contactPagePath={contactPagePath}
          page={SERVICE_NAME}
          className={classes.sectionContainer}
        />
        <PictureWall />
        {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
      </Article>
      <Footer contactPagePath={contactPagePath} hideContactButton={false} />
    </>
  )
}
