import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import NavBar from 'main_app/components/NavBar'
import NearshoreOutsourcingHero from '../components/NearshoreOutsourcing'
import KeyToSuccessfulSourcing from '../components/KeyToSuccessfulSourcing'

import PageMetadata from 'utils/marketing/PageMetadata'

function NearshoreOutsourcing () {
  const contactPagePath = '/about-us/contact'
  const { pathname, push } = useRouter()
  const handleClose = useCallback(() => {
    push('/about-us', undefined, { shallow: true, scroll: false })
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
      </Article>
      {contactPagePath === pathname && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer />
    </>
  )
}

export default NearshoreOutsourcing
