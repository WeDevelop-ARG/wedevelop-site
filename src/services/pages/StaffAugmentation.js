import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import BenefitsOfPartnering from 'services/components/BenefitsOfPartnering'
import ContactModal from 'main_app/components/ContactModal'
import Details from '../components/details'
import EveryStepMatters from 'services/components/EveryStepMatters'
import Footer from 'main_app/components/Footer'
import Hero from '../components/hero'
import HowItWorks from 'services/components/HowItWorks'
import HowStaffAugmentationSolutionsWork from 'services/components/HowStaffAugmentationSolutionsWork'
import NavBar from 'main_app/components/NavBar'
import NumbersSpeak from 'services/components/NumbersSpeak'
import PageMetadata from 'utils/marketing/PageMetadata'
import PictureWall from 'main_app/components/PictureWall'
import Schedule from '../components/schedule'
import ScheduleFormModal from 'staff_augmentation/components/ScheduleFormModal'
import StaffDetails from '../components/details/components/StaffDetails'
import WhyHireWeDevelop from 'services/components/WhyHireWeDevelop'

import photo from 'assets/services/photo-staff-augmentation.svg'
import icon from 'assets/services/icon-staff-augmentation.svg'
import background from 'assets/services/background-staff-augmentation.png'

import classes from './services.module.scss'

function StaffAugmentation () {
  const SERVICE_NAME = 'staff-augmentation'
  const contactPagePath = '/services/staff-augmentation/contact'
  const { pathname, push } = useRouter()
  const handleClose = useCallback(async () => {
    await push('/services/staff-augmentation')
  }, [push])

  const [isFormModalOpen, setFormModalOpen] = useState(false)

  const onSuccess = useCallback(() => {
    setFormModalOpen(false)
  }, [])
  const switchToCallModal = useCallback(async () => {
    setFormModalOpen(false)
    await push(contactPagePath)
  }, [push])

  return (
    <>
      <PageMetadata
        title='IT Staff Augmentation'
        description='A solid IT Staffing Agency building up the most agile and efficient teams in the world. Get a free quote within the next hour.'
      />
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
        <Hero
          service={SERVICE_NAME}
          className={classes.sectionContainer}
          contactPagePath={contactPagePath}
          icon={icon}
          photo={photo}
          background={background}
          title={<>IT Staff <br />Augmentation</>}
          description={<>Struggling to find talent? <br />Access a Top-Level talent pool of IT professionals.</>}
          ctaText='Start Today'
        />
        <WhyHireWeDevelop />
        <section className={classes.serviceDetails}>
          <Details subTitle='Assemble your dream team of highly skilled professionals'>
            <StaffDetails />
          </Details>
        </section>
        <BenefitsOfPartnering contactPagePath={contactPagePath} />
        <HowStaffAugmentationSolutionsWork />
        <EveryStepMatters />
        <NumbersSpeak />
        <HowItWorks />
        <Schedule
          className={classes.sectionContainer}
          contactPagePath={contactPagePath}
          page={SERVICE_NAME}
        />
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

export default StaffAugmentation
