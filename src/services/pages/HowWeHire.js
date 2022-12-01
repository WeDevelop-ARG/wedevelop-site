import Article from 'main_app/components/Article'
import { useCallback } from 'react'

import ContactModal from 'main_app/components/ContactModal'
import PictureWall from 'main_app/components/PictureWall'

import Footer from 'main_app/components/Footer'
import NavBar from 'main_app/components/NavBar'
import PageMetadata from 'utils/marketing/PageMetadata'

import { useRouter } from 'next/router'
import Schedule from 'services/components/schedule'

export default function HowWeHire () {
  const SERVICE_NAME = 'how-we-hire'
  const contactPagePath = '/services/how-we-hire/contact'
  const { pathname, push } = useRouter()

  const handleClose = useCallback(() => {
    push('/services/how-we-hire')
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
        {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
        <Schedule
          contactPagePath={contactPagePath}
          service={SERVICE_NAME}
        />
        <PictureWall />
      </Article>
      <Footer />
    </>
  )
}
