import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import NavBar from 'main_app/components/NavBar'
import PictureWall from 'main_app/components/PictureWall'
import PageMetadata from 'utils/marketing/PageMetadata'
import WeDevelopCareers from './components/WeDevelopCareers'
import JoinUsHeader from './components/JoinUsHeader'

function JobOpenings () {
  const contactPagePath = '/careers/job-openings/contact'
  const { pathname, push } = useRouter()

  const handleClose = useCallback(() => {
    push('/careers/job-openings', undefined, { shallow: true, scroll: false })
  }, [push])

  return (
    <>
      <PageMetadata
        title='Join Us'
        description='Join the professional teams of WeDevelop.'
      />
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <JoinUsHeader />
        <WeDevelopCareers />
        <PictureWall />
      </Article>
      {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer contactPagePath={contactPagePath} hideContactButton={false} email='jobs@wedevelop.me' />
    </>
  )
}

export default JobOpenings
