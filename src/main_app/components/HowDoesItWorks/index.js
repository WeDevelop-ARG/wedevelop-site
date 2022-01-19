import { Fragment } from 'react'
import classNames from 'classnames'

import Image from 'next/image'
import Step from './components/Step'

import { useStep } from './components/hooks/useStep'

import DesktopSteps from 'assets/how_does_it_works/steps.svg'
import { ReactComponent as Arrow } from 'assets/how_does_it_works/arrows/horizontal_arrow.svg'

import classes from './styles.module.scss'

function HowDoesItWorks ({ className }) {
  const steps = useStep()
  return (
    <section className={classNames(classes.container, className)}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheading}>Screening Process</p>
        <h2 className={classes.title}>How it works</h2>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.stepsContainer}>
        <div className={classes.remarkContainer}>
          <p className={classes.remark}>We’ll send you  more profiles on a daily basis</p>
        </div>
        <Image src={DesktopSteps} alt='' className={classes.desktopSteps} />
        <div className={classes.row}>
          {steps && steps.map(({ id, icon, title, description }, index) => {
            const isLast = (steps.length - 1) === index
            return (
              <Fragment key={id}>
                <Step
                  icon={icon}
                  title={title}
                  description={description}
                  className={classes.step}
                />
                {!isLast && <Arrow className={classes.arrows} />}
              </Fragment>
            )
          }
          )}
        </div>
      </div>
    </section>
  )
}

export default HowDoesItWorks
