import StepWizard from 'react-step-wizard'
import { useCallback, useRef } from 'react'

import { FOLLOW_UP_FORM_PROCESSOR_URL } from 'main_app/constants'

import FormProgress from './ProgressBar'
import ServiceType from './Steps/ServiceType'
import ItProfessionals from './Steps/ItProfessionals'
import Duration from './Steps/Duration'
import Budget from './Steps/Budget'
import StartingDate from './Steps/StartingDate'
import Technologies from './Steps/Technologies'
import ScheduleCall from './Steps/ScheduleCall'

import classes from './styles.module.scss'

function MultiForm ({ handleModalOpen, tracingId, contact }) {
  const stepWizardInstance = useRef()
  const handleFormSubmit = useCallback(async values => {
    try {
      await window.fetch(FOLLOW_UP_FORM_PROCESSOR_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          tracingId,
          ...values
        })
      })
      stepWizardInstance.current.nextStep()
    } catch (err) {
      console.error(err)
      window.alert('An error ocurred saving your information, please try again or wait until a representative gets in contact with you.')
    }
  }, [tracingId])

  return (
    <>
      <StepWizard
        isLazyMount
        isHashEnabled
        nav={<FormProgress />}
        className={classes.stepWizardContainer}
        instance={instance => { stepWizardInstance.current = instance }}
      >
        <ServiceType hashKey='service-type' onSubmit={handleFormSubmit} />
        <ItProfessionals hashKey='it-professionals' onSubmit={handleFormSubmit} />
        <Duration hashKey='duration' onSubmit={handleFormSubmit} />
        <Budget hashKey='budget' onSubmit={handleFormSubmit} />
        <StartingDate hashKey='starting-date' onSubmit={handleFormSubmit} />
        <Technologies hashKey='technologies' onSubmit={handleFormSubmit} />
        <ScheduleCall
          hashKey='schedule-call'
          tracingId={tracingId}
          skipModal={handleModalOpen}
          contact={contact}
        />
      </StepWizard>
    </>
  )
}

export default MultiForm
