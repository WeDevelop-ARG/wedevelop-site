import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import KeyToSuccessfulSourcing from '../../components/KeyToSuccessfulSourcing'
import NavBar from 'main_app/components/NavBar'
import NearshoreOutsourcingHero from '../../components/NearshoreOutsourcingHero'
import PageMetadata from 'utils/marketing/PageMetadata'

import classes from './styles.module.scss'

function NearshoreOutsourcing () {
  const contactPagePath = '/about-us/nearshore-outsourcing/contact'
  const { pathname, push } = useRouter()
  const handleClose = useCallback(() => {
    push('/about-us/nearshore-outsourcing', undefined, { shallow: true, scroll: false })
  }, [push])

  return (
    <>
      <PageMetadata
        title='Nearshore Outsourcing'
        description='The smart way to have on board the best remote talent.'
      />
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <NearshoreOutsourcingHero />
        <KeyToSuccessfulSourcing />
        <GetInTouch
          heading='Get In Touch'
          title='Get a bespoke solution for your business'
          description=''
          ctaButtonText='Get a bespoke'
          contactPagePath={contactPagePath}
          className={classes.getInTouchContent}
        />
      </Article>
      {contactPagePath === pathname && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer contactPagePath={contactPagePath} hideContactButton={false} />
    </>
  )
}

export default NearshoreOutsourcing
