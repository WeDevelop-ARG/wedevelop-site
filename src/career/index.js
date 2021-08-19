import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'
import Article from 'main_app/components/Article'
import PictureWall from 'main_app/components/PictureWall'
import ContactModal from 'main_app/components/ContactModal'

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
        <PictureWall />
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default Career
