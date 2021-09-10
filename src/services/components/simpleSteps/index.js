import React from 'react'
import Step from './components/Step'
import { useStep } from './components/hooks/useStep'
import classes from './simpleSteps.module.scss'
import classNames from 'classnames'

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
    </section>
  )
}

export default SimpleSteps
