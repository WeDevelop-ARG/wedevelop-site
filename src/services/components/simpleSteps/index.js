import React from 'react'
import Step from './components/Step'
import { useStep } from './components/hooks/useStep'
import classes from './simpleSteps.module.scss'

function SimpleSteps() {
  const steps = useStep()
  return (
    <>
      <div className={classes.container}>
        <div>
          <h2 className={classes.title}>Three simple steps</h2>
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
      </div>
      <div className={classes.shadowLine} ></div>
      <div className={classes.background}></div>
    </>
  )
}

export default SimpleSteps
