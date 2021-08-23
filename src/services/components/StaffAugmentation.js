import Hero from './hero'
import Details from './details'
import StaffDetails from './details/components/StaffDetails'
import SimpleSteps from './simpleSteps'
import Benefits from './benefits'
import Schedule from './schedule'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import photo from 'assets/services/photo-staff-augmentation.svg'
import icon from 'assets/services/icon-staff-augmentation.svg'
import background from 'assets/services/background-staff-augmentation.png'

import classes from './services.module.scss'

function StaffAugmentation() {
  usePageMetadata({
    title: 'Staff Augmentation',
    description: ''
  })

  return (
    <>
      <section className={classes.sectionContainer}>
        <Hero
          service="staff"
          icon={icon}
          photo={photo}
          background={background}
          title="Staff Augmentation"
          description="Expand your team with our skilled experts who can scale up your development speed, quality and substantially cut down your costs."
        />
      </section>
      <section className={classes.sectionContainer}>
        <Details
          subTitle="Get your dream team of highly skilled professionals"
        >
          <StaffDetails />
        </Details>
      </section>
      <section className={classes.sectionContainer}>
        <SimpleSteps />
      </section>
      <section className={classes.sectionContainer}>
        <Benefits />
      </section>
      <section className={classes.sectionContainer}>
        <Schedule />
      </section>
    </>
  )
}

export default StaffAugmentation

