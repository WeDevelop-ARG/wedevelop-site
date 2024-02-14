import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import BenefitsOfPartnering from 'services/components/BenefitsOfPartnering'
import ContactModal from 'main_app/components/ContactModal'
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
import WhyHireWeDevelop from 'services/components/WhyHireWeDevelop'

import Photo from 'assets/services/photo-hiring-solutions.svg'
import Icon from 'assets/services/icon-hiring-solutions.svg'
import Background from 'assets/services/background-hiring-solutions.png'

import classes from './services.module.scss'

function StaffAugmentation () {
  const SERVICE_NAME = 'hiring-solutions'
  const contactPagePath = '/services/hiring-solutions/contact'
  const { pathname, push } = useRouter()
  const handleClose = useCallback(async () => {
    await push('/services/hiring-solutions', undefined, { shallow: true, scroll: false })
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
        title='Hiring solutions'
        description='A solid Nearshore Agency building up the most agile and efficient teams in the world.'
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
          icon={Icon}
          photo={Photo}
          background={Background}
          title={<>Hiring<br />Solutions</>}
          description={<>Struggling to find talent? <br />Access a Top-Level talent pool of IT professionals.</>}
          ctaText='Start Today'
        />
        <WhyHireWeDevelop />
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
      <Footer contactPagePath={contactPagePath} hideContactButton={false} />
      <ScheduleFormModal
        isModalOpen={isFormModalOpen}
        setModalOpen={setFormModalOpen}
        onScheduleMeetingClick={switchToCallModal}
        onSubmit={onSuccess}
        formOrigin='services/hiring-solutions'
      />
    </>
  )
}

export default StaffAugmentation
