import { ErrorMessage } from 'formik'

import StepHeader from '../../StepHeader'
import RadioButtonIconCards from 'main_app/components/RadioButtonIconCards'
import FormLogic from './FormLogic'

import { ReactComponent as Only1 } from 'assets/follow_up/form/only1.svg'
import { ReactComponent as TwoTo5 } from 'assets/follow_up/form/2_to_5.svg'
import { ReactComponent as MoreThan5 } from 'assets/follow_up/form/more_than_5.svg'
import { ReactComponent as InterrogationMark } from 'assets/follow_up/form/interrogation_mark.svg'

import classes from '../styles.module.scss'

function ItProfessionals () {
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
      >
        <RadioButtonIconCards
          name='itProfessionals'
          options={itProfessionals}
        />
        <ErrorMessage name='itProfessionals' component='div' className={classes.errorMessage} />
      </FormLogic>
    </section>
  )
}

export default ItProfessionals
