import { ErrorMessage } from 'formik'

import StepHeader from '../../StepHeader'
import RadioButtonList from 'main_app/components/RadioButtonList'
import ControlButtons from '../../ControlButtons'
import FormLogic from './FormLogic'

import classes from '../styles.module.scss'

function Duration ({ currentStep, previousStep, onSubmit, totalSteps }) {
  const duration = [{
    value: 'Less than 3 months',
    label: 'Less than 3 months'
  },
  {
    value: '3 to 6 months',
    label: '3 to 6 months'
  },
  {
    value: '6 to 12 moths',
    label: '6 to 12 moths'
  },
  {
    value: 'More than a year',
    label: 'More than a year'
  },
  {
    value: 'I don\'t know',
    label: 'I don\'t know'
  }]
  const initialValues = {
    stepName: 'Duration',
    duration: ''
  }

  return (
    <section>
      <StepHeader
        title='Duration'
        description='Contract duration'
      />
      <FormLogic
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <RadioButtonList
          name='duration'
          options={duration}
        />
        <ErrorMessage name='duration' component='div' className={classes.errorMessage} />
        <ControlButtons
          currentStep={currentStep}
          previousStep={previousStep}
          totalSteps={totalSteps}
        />
      </FormLogic>
    </section>
  )
}

export default Duration
