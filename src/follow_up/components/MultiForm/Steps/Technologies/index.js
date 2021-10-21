import { ErrorMessage } from 'formik'

import StepHeader from '../../StepHeader'
import FormikSelect from 'main_app/components/FormikSelect'
import FormLogic from './FormLogic'

import useSkillOptions from 'main_app/components/useSkillOptions'

import classes from '../styles.module.scss'

function Technologies () {
  const technologies = useSkillOptions()
  const initialValues = {
    technologies: []
  }
  return (
    <section>
      <StepHeader
        title='Technologies'
      />
      <FormLogic
        initialValues={initialValues}
      >
        <FormikSelect
          name='technologies'
          options={technologies}
          placeholder='Select a technology'
        />
        <ErrorMessage name='technologies' component='div' className={classes.errorMessage} />
      </FormLogic>
    </section>
  )
}

export default Technologies
