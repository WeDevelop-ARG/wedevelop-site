import { useState, useMemo } from 'react'
import isUndefined from 'lodash/isUndefined'
import StepWizard from 'react-step-wizard'

import FormProgress from './ProgressBar'
import ControlButtons from './ControlButtons'
import ServiceType from './Steps/ServiceType'
import ItProfessionals from './Steps/ItProfessionals'
import Duration from './Steps/Duration'
import Budget from './Steps/Budget'
import StartingDate from './Steps/StartingDate'
import Technologies from './Steps/Technologies'
import ScheduleCall from './Steps/ScheduleCall'

import classes from './styles.module.scss'

function MultiForm ({ handleModalOpen }) {
  const [stepWizardInstance, setStepWizardInstance] = useState()
  const [currentStep, setCurrentStep] = useState()

  const fullCurrentStep = useMemo(() => {
    if (!stepWizardInstance) return undefined
    if (isUndefined(currentStep)) return stepWizardInstance.currentStep

    return currentStep
  }, [stepWizardInstance, currentStep])

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
        <ServiceType hashKey='service-type' />
        <ItProfessionals hashKey='it-professionals' />
        <Duration hashKey='duration' />
        <Budget hashKey='budget' />
        <StartingDate hashKey='starting-date' />
        <Technologies hashKey='technologies' />
        <ScheduleCall hashKey='schedule-call' />
      </StepWizard>
      {stepWizardInstance &&
        <ControlButtons
          SW={stepWizardInstance}
          currentStep={fullCurrentStep}
          handleModalOpen={handleModalOpen}
        />}
    </>
  )
}

export default MultiForm
