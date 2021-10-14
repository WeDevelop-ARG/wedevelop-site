import { useState } from 'react'
import StepWizard from 'react-step-wizard'

import FormProgress from './ProgressBar'
import ControlButtons from './ControlButtons'

import classes from './styles.module.scss'

function MultiForm () {
  const [stepWizardInstance, setStepWizardInstance] = useState()
  const [currentStep, setCurrentStep] = useState()
  return (
    <>
      <StepWizard
        initialStep={1}
        onStepChange={({ activeStep }) => setCurrentStep(activeStep)}
        isLazyMount
        isHashEnabled
        nav={<FormProgress />}
        instance={setStepWizardInstance}
        className={classes.stepWizardContainer}
      >
        <div hashKey='step-1'>Step 1</div>
        <div hashKey='step-2'>Step 2</div>
        <div hashKey='step-3'>Step 3</div>
        <div hashKey='step-4'>Step 4</div>
        <div hashKey='step-5'>Step 5</div>
        <div hashKey='step-6'>Step 6</div>
        <div hashKey='step-7'>Step 7</div>
        <div hashKey='step-8'>Step 8</div>
        <div hashKey='step-9'>Step 9</div>
        <div hashKey='step-10'>Step 10</div>
        <div hashKey='step-11'>Step 11</div>
        <div hashKey='step-12'>Step 12</div>
        <div hashKey='step-13'>Step 13</div>
      </StepWizard>
      {stepWizardInstance &&
        <ControlButtons
          SW={stepWizardInstance}
          currentStep={currentStep}
        />}
    </>
  )
}

export default MultiForm
