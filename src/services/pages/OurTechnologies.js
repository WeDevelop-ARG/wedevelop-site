import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import Article from 'main_app/components/Article'
import PictureWall from 'main_app/components/PictureWall'
import ScheduleFormModal from 'staff_augmentation/components/ScheduleFormModal'
import OurMainTechnologies from 'services/components/OurMainTechnologies'

import Footer from 'main_app/components/Footer'
import NavBar from 'main_app/components/NavBar'
import PageMetadata from 'utils/marketing/PageMetadata'
import OtherTechnologies from '../components/OtherTechnologies'

function OurTechnologies () {
  const contactPagePath = '/services/staff-augmentation/contact'
  const { push } = useRouter()
  const [isFormModalOpen, setFormModalOpen] = useState(false)

  const onSuccess = useCallback(() => {
    setFormModalOpen(false)
  }, [])
  const switchToCallModal = useCallback(() => {
    setFormModalOpen(false)
    push(contactPagePath)
  }, [push])

  return (
    <>
      <PageMetadata
        title='Our Technologies'
        description='Our Technologies'
      />
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <OurMainTechnologies />
        <OtherTechnologies />
        <PictureWall />
      </Article>
      <Footer />
      <ScheduleFormModal
        isModalOpen={isFormModalOpen}
        setModalOpen={setFormModalOpen}
        onScheduleMeetingClick={switchToCallModal}
        onSubmit={onSuccess}
        formOrigin='services/staff-augmentation'
      />
    </>
  )
}

export default OurTechnologies
