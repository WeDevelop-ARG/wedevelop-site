import { ErrorMessage } from 'formik'

import StepHeader from '../../StepHeader'
import RadioButtonTextCards from 'main_app/components/RadioButtonTextCards'
import ControlButtons from '../../ControlButtons'
import FormLogic from './FormLogic'

import classes from '../styles.module.scss'

function StartingDate ({ currentStep, previousStep, onSubmit, totalSteps }) {
  const startingDate = [{
    value: 'Immediately',
    label: 'Immediately'
  },
  {
    value: '2-4 weeks',
    label: '2-4 weeks'
  },
  {
    value: 'I don\'t know',
    label: 'I don\'t know'
  }]
  const initialValues = {
    stepName: 'Starting Date',
    startingDate: ''
  }

  return (
    <section>
      <StepHeader
        title='Starting Date'
        description='Expected Start Date'
      />
      <FormLogic
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <RadioButtonTextCards
          name='startingDate'
          options={startingDate}
        />
        <ErrorMessage name='startingDate' component='div' className={classes.errorMessage} />
        <ControlButtons
          currentStep={currentStep}
          previousStep={previousStep}
          totalSteps={totalSteps}
        />
      </FormLogic>
    </section>
  )
}

export default StartingDate
