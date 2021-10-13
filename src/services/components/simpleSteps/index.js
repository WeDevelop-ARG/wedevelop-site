import classNames from 'classnames'

import Step from './components/Step'

import { useStep } from './components/hooks/useStep'
import SemicirclesMobile from 'assets/services/three_simple_steps/semicircles_mobile.svg'

import classes from './simpleSteps.module.scss'

function SimpleSteps ({ className }) {
  const steps = useStep()
  return (
    <section className={classNames(classes.container, className)}>
      <h2 className={classes.title}>Three simple steps</h2>
      <div className={classes.row}>
        {steps && steps.map(step => (
          <Step
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            className={classes.step}
          />
        ))}
      </div>
      <img src={SemicirclesMobile} className={classes.semicirclesMobile} alt='' aria-hidden />
    </section>
  )
}

export default SimpleSteps
