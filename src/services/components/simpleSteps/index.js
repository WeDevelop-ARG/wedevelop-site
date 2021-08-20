import React from 'react'
import Step from './components/Step'
import { useStep } from './components/hooks/useStep'
import classes from './simpleSteps.module.scss'
import background from 'assets/services/three-simple-steps-bg.svg'
import shadowLine from 'assets/services/simple-steps-bottom_shadow_line.svg'

function SimpleSteps() {
  const steps = useStep()
  return (
    <div className={classes.container}>
      <div>
        <h3 className={classes.title}>Three simple steps</h3>
        <div className={classes.row}>
          {steps && steps.map(step => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
      <img className={classes.shadowLine} src={shadowLine} alt="" />
      <img className={classes.background} src={background} alt="" />
    </div>
  )
}

export default SimpleSteps

