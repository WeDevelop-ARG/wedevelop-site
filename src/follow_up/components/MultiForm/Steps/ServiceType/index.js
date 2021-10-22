import { useCallback } from 'react'
import { ErrorMessage } from 'formik'

import StepHeader from '../../StepHeader'
import RadioButtonTextCards from 'main_app/components/RadioButtonTextCards'
import ControlButtons from '../../ControlButtons'
import FormLogic from './FormLogic'

import classes from '../styles.module.scss'

function ServiceType ({ currentStep, nextStep, totalSteps }) {
  const serviceType = [{
    value: 'Staff Augmentation',
    label: 'Staff Augmentation'
  },
  {
    value: 'Autonomous Team',
    label: 'Autonomous Team'
  },
  {
    value: 'Other',
    label: 'Other'
  }]
  const initialValues = {
    serviceType: ''
  }
  const onSubmitFinished = useCallback(() => {
    nextStep()
  }, [nextStep])

  return (
    <section>
      <StepHeader
        title='Service Type'
        description='Select the Service you need'
      />
      <FormLogic
        initialValues={initialValues}
        onSubmitFinished={onSubmitFinished}
      >
        <RadioButtonTextCards
          name='serviceType'
          options={serviceType}
        />
        <ErrorMessage name='serviceType' component='div' className={classes.errorMessage} />
        <ControlButtons
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      </FormLogic>
    </section>
  )
}

export default ServiceType
