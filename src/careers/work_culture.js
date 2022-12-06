import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import NavBar from 'main_app/components/NavBar'
import OurCulture from './components/OurCulture'
import PageMetadata from 'utils/marketing/PageMetadata'
import PictureWall from 'main_app/components/PictureWall'
import Values from './components/Values'
import OurWorkCulture from './components/OurWorkCulture'
import WhyWorkWithUs from './components/WhyWorkWithUs'

function WorkCulture () {
  const contactPagePath = '/careers/work-culture/contact'
  const { pathname, push } = useRouter()

  const handleClose = useCallback(() => {
    push('/careers/work-culture', undefined, { shallow: true, scroll: false })
  }, [push])

  return (
    <>
      <PageMetadata
        title='Work Culture'
        description='Work Culture'
      />
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <OurWorkCulture />
        <OurCulture />
        <Values />
        <WhyWorkWithUs />
        <PictureWall />
      </Article>
      {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer contactPagePath={contactPagePath} hideContactButton={false} />
    </>
  )
}

export default WorkCulture
