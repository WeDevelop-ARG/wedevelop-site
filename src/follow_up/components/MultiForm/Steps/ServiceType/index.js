import { ErrorMessage } from 'formik'

import StepHeader from '../../StepHeader'
import RadioButtonTextCards from 'main_app/components/RadioButtonTextCards'
import FormLogic from './FormLogic'

import classes from '../styles.module.scss'
import Button from 'main_app/components/Button'

function ServiceType () {
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

  return (
    <section>
      <StepHeader
        title='Service Type'
        description='Select the Service you need'
      />
      <FormLogic
        initialValues={initialValues}
      >
        <RadioButtonTextCards
          name='serviceType'
          options={serviceType}
        />
        <ErrorMessage name='serviceType' component='div' className={classes.errorMessage} />
        <Button
          variant='secondary'
        >
          Save
        </Button>
      </FormLogic>
    </section>
  )
}

export default ServiceType
