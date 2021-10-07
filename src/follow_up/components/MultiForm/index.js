import { useState } from 'react'
import StepWizard from 'react-step-wizard'

import FormProgress from './ProgressBar'
import ControlButtons from './ControlButtons'

import classes from './styles.module.scss'

function MultiForm () {
  const [formState, updateFormState] = useState({
    form: {}
  })
  const onStepChange = () => {
    updateFormState({
      ...formState
    })
  }
  const setInstance = SW => updateFormState({
    ...formState,
    SW
  })
  const { SW } = formState

  return (
    <>
      <StepWizard
        onStepChange={onStepChange}
        initialStep={1}
        isLazyMount
        nav={<FormProgress />}
        instance={setInstance}
        className={classes.stepWizardContainer}
      >
        <div>Step 1</div>
        <div>Step 2</div>
        <div>Step 3</div>
        <div>Step 4</div>
        <div>Step 5</div>
        <div>Step 6</div>
        <div>Step 7</div>
        <div>Step 8</div>
        <div>Step 9</div>
        <div>Step 10</div>
        <div>Step 11</div>
        <div>Step 12</div>
        <div>Step 13</div>
      </StepWizard>
      {SW && <ControlButtons SW={SW} />}
    </>
  )
}

export default MultiForm
