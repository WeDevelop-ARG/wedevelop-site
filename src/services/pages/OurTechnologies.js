import { useRouter } from 'next/router'
import { useCallback } from 'react'

import Article from 'main_app/components/Article'
import ContactModal from '../../main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import PictureWall from 'main_app/components/PictureWall'
import NavBar from 'main_app/components/NavBar'
import OtherTechnologies from '../components/OtherTechnologies'
import OurMainTechnologies from 'services/components/OurMainTechnologies'
import PageMetadata from 'utils/marketing/PageMetadata'
import Schedule from '../components/schedule'

import classes from './services.module.scss'

function OurTechnologies () {
  const contactPagePath = '/services/our-technologies/contact'
  const { pathname, push } = useRouter()

  const handleClose = useCallback(async () => {
    await push('/services/our-technologies')
  }, [push])

  return (
    <>
      <PageMetadata
        title='Our Technologies'
        description='Our Technologies'
      />
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <OurMainTechnologies />
        <OtherTechnologies />
        <Schedule
          page='our-technologies'
          contactPagePath={contactPagePath}
          className={classes.sectionContainer}
        />
        <PictureWall />
        {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
      </Article>
      <Footer contactPagePath={contactPagePath} hideContactButton={false} />
    </>
  )
}

export default OurTechnologies
