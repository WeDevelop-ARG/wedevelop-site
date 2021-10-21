import { ErrorMessage } from 'formik'

import StepHeader from '../../StepHeader'
import RadioButtonList from 'main_app/components/RadioButtonList'
import FormLogic from './FormLogic'

import classes from '../styles.module.scss'

function Budget () {
  const budget = [{
    value: 'Under $10k',
    label: 'Under $10k '
  },
  {
    value: '$10k to $50k',
    label: '$10k to $50k'
  },
  {
    value: '$10k to $200k',
    label: '$10k to $200k'
  },
  {
    value: 'Variable',
    label: 'Variable'
  }]
  const initialValues = {
    budget: ''
  }

  return (
    <section>
      <StepHeader
        title='Budget'
        description='Monthly budget'
      />
      <FormLogic
        initialValues={initialValues}
      >
        <RadioButtonList
          name='budget'
          options={budget}
        />
        <ErrorMessage name='budget' component='div' className={classes.errorMessage} />
      </FormLogic>
    </section>
  )
}

export default Budget
