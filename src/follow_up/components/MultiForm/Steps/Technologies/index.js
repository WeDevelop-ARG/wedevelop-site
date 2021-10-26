import { useCallback } from 'react'
import { ErrorMessage } from 'formik'

import StepHeader from '../../StepHeader'
import FormikSelect from 'main_app/components/FormikSelect'
import ControlButtons from '../../ControlButtons'
import FormLogic from './FormLogic'

import useSkillOptions from 'main_app/components/useSkillOptions'

import classes from '../styles.module.scss'

function Technologies ({ currentStep, previousStep, nextStep, totalSteps }) {
  const technologies = useSkillOptions()
  const initialValues = {
    technologies: []
  }
  const onSubmitFinished = useCallback(() => {
    nextStep()
  }, [nextStep])

  return (
    <section>
      <StepHeader
        title='Technologies'
      />
      <FormLogic
        initialValues={initialValues}
        onSubmitFinished={onSubmitFinished}
      >
        <FormikSelect
          name='technologies'
          options={technologies}
          placeholder='Select one or more required technologies'
        />
        <ErrorMessage name='technologies' component='div' className={classes.errorMessage} />
        <ControlButtons
          currentStep={currentStep}
          previousStep={previousStep}
          totalSteps={totalSteps}
        />
      </FormLogic>
    </section>
  )
}

export default Technologies
