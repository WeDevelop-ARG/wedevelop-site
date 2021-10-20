import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'

import classes from './styles.module.scss'

function Portfolio () {
  const contactPagePath = '/portfolio/contact'
  const match = useRouteMatch(contactPagePath)
  const history = useHistory()
  const handleClose = useCallback(() => {
    history.push('/portfolio')
  }, [history])

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <section id='portfolio'>
          <div>
            <p className={classes.subheadingText}>success stories</p>
            <h2 className={classes.titleText}>Our Portfolio</h2>
            <hr className={classes.horizontalBar} />
          </div>
        </section>
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default Portfolio
