import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import NavBar from 'main_app/components/NavBar'
import NearshoreOutsourcingHero from '../components/NearshoreOutsourcing'
import KeyToSuccessfulSourcing from '../components/KeyToSuccessfulSourcing'
import NearshoreITStaffing from '../components/NearshoreITStaffing'
import OutsourceReasons from '../components/OutsourceReasons'

import PageMetadata from 'utils/marketing/PageMetadata'

import classes from './nearshore-outsourcing.module.scss'

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
      <Article className={classes.pageContent}>
        <NearshoreOutsourcingHero />
        <KeyToSuccessfulSourcing />
        <NearshoreITStaffing />
        <OutsourceReasons />
      </Article>
      {contactPagePath === pathname && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer />
    </>
  )
}

export default NearshoreOutsourcing
