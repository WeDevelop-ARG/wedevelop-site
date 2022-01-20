import { useCallback } from 'react'

import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import JoinUsForm from './components/JoinUsForm'
import NavBar from 'main_app/components/NavBar'
import PictureWall from 'main_app/components/PictureWall'
import { Router } from 'next/router'

function Career () {
  const contactPagePath = '/career/contact'
  const { pathname } = useRouter()

  const handleClose = useCallback(() => {
    Router.push('/career')
  }, [])

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <JoinUsForm />
        <PictureWall />
      </Article>
      {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer />
    </>
  )
}

export default Career
