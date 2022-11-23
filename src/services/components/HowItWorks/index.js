import useGetOurProcessSteps from 'services/hooks/useGetOurProcessSteps'

import BackgroundContainer from 'staff_augmentation/components/BackgroundContainer'
import HowItWorksBackground from 'assets/services/how-it-works-background.png'
import OurProcessStep from './OurProcessStep'

import classes from './styles.module.scss'

export default function HowItWorks () {
  const { steps } = useGetOurProcessSteps()

  return (
    <>
      <section id='staff-augmentation-how-it-works' className={classes.howItWorksSection}>
        <div className={classes.sectionHeader}>
          <div className={classes.headerContent}>
            <p className={classes.heading}>Our Process</p>
            <h2 className={classes.title}>How It Works</h2>
            <p className={classes.description}>
              We are committed to your business success, and to achieve such a mission,
              we assemble your team quickly through a seamless hiring process
            </p>
            <hr className={classes.horizontalBar} />
          </div>
        </div>
        <div className={classes.howDisclaimer}>
          <p className={classes.disclaimerTitle}>How?</p>
          <p className={classes.disclaimerContent}>
            Through an efficient staff augmentation three-step methodology designed to
            deliver customized solutions to every business. Whether you need a single
            hire or an entire team, we source the best candidates to match your
            requirements with the best cost/quality ratio.
          </p>
        </div>
        <div className={classes.ourProcessSteps}>
          <p className={classes.stepsHeading}>Your IT Staffing Journey With WeDevelop</p>
          <div className={classes.stepsContainer}>
            {steps.map(({ id, ...rest }) => (
              <OurProcessStep
                key={id}
                {...rest}
              />
            ))}
          </div>
        </div>
      </section>
      <BackgroundContainer backgroundURL={HowItWorksBackground} />
    </>
  )
}
