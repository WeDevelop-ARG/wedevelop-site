import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import JoinUsForm from './components/JoinUsForm'
import NavBar from 'main_app/components/NavBar'
import PictureWall from 'main_app/components/PictureWall'
import PageMetadata from 'utils/marketing/PageMetadata'

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
        <JoinUsForm />
        <PictureWall />
      </Article>
      {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer email='jobs@wedevelop.me' />
    </>
  )
}

export default JobOpenings