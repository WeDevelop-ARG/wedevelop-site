import classNames from 'classnames'

import { useStep } from './components/hooks/useStep'

import Step from './components/Step'
import WrappedImage from '../WrappedImage'

import DesktopSteps from 'assets/how_does_it_works/steps.svg'
import DotsPattern from 'assets/how_does_it_works/dots_pattern.svg'

import classes from './styles.module.scss'

function HowDoesItWorks ({
  handleContactCTAClick,
  handleScheduleMeetingCTAClick,
  className
}) {
  const steps = useStep({
    handleContactCTAClick,
    handleScheduleMeetingCTAClick
  })
  return (
    <section className={classNames(classes.container, className)}>
      <WrappedImage src={DotsPattern} alt='' className={classes.topRightDotsPattern} />
      <div className={classes.sectionHeader}>
        <p className={classes.subheading}>Our Process</p>
        <h2 className={classes.title}>How It Works</h2>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.stepsContainer}>
        <WrappedImage layout='responsive' src={DesktopSteps} alt='' className={classes.desktopSteps} />
        <div className={classes.row}>
          {steps?.map(({ id, icon, title, description, mobileArrow }, index) => (
            <Step
              key={id}
              icon={icon}
              title={title}
              description={description}
              isLast={(steps.length - 1) === index}
              arrow={mobileArrow}
              className={classes.step}
            />
          )
          )}
        </div>
      </div>
    </section>
  )
}

export default HowDoesItWorks
