import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import JoinUsForm from './components/JoinUsForm'
import NavBar from 'main_app/components/NavBar'
import PictureWall from 'main_app/components/PictureWall'

function Career () {
  const contactPagePath = '/career/contact'
  const match = useRouteMatch(contactPagePath)
  const history = useHistory()
  const handleClose = useCallback(() => {
    history.push('/career')
  }, [history])

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
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default Career
