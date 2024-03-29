import { ErrorMessage } from 'formik'

import StepHeader from '../../StepHeader'
import RadioButtonIconCards from 'main_app/components/RadioButtonIconCards'
import ControlButtons from '../../ControlButtons'
import FormLogic from './FormLogic'

import Only1 from 'assets/follow_up/form/only1.component.svg'
import TwoTo5 from 'assets/follow_up/form/2_to_5.component.svg'
import MoreThan5 from 'assets/follow_up/form/more_than_5.component.svg'
import InterrogationMark from 'assets/follow_up/form/interrogation_mark.component.svg'

import classes from '../styles.module.scss'

function ItProfessionals ({ currentStep, previousStep, onSubmit, totalSteps }) {
  const itProfessionals = [{
    value: 'Only 1',
    label: 'Only 1',
    icon: <Only1 />
  },
  {
    value: '2 up to 5',
    label: '2 up to 5',
    icon: <TwoTo5 />
  },
  {
    value: 'More than 5',
    label: 'More than 5',
    icon: <MoreThan5 />
  },
  {
    value: 'I don\'t know',
    label: 'I don\'t know',
    icon: <InterrogationMark />
  }]
  const initialValues = {
    stepName: 'IT Professionals',
    itProfessionals: ''
  }

  return (
    <section>
      <StepHeader
        title='IT Professionals'
        description='How many IT Professionals you need?'
      />
      <FormLogic
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <RadioButtonIconCards
          name='itProfessionals'
          options={itProfessionals}
        />
        <ErrorMessage name='itProfessionals' component='div' className={classes.errorMessage} />
        <ControlButtons
          currentStep={currentStep}
          previousStep={previousStep}
          totalSteps={totalSteps}
        />
      </FormLogic>
    </section>
  )
}

export default ItProfessionals
