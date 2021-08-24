import classnames from 'classnames'
import { Field } from 'formik'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import FormLogic from './FormLogic'
import FormikSelect from './FormikSelect/index'

import classes from './styles.module.scss'

function JoinUsForm ({
  onSubmitFinished,
  submitButtonText
}) {
  const TextAreaWithError = useFieldWithErrorClassName(
    Textarea,
    classes.fieldWithError
  )
  const InputWithError = useFieldWithErrorClassName(
    'input',
    classes.fieldWithError
  )
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    skillOptions: []
  }

  const skillOptions = [
    {
      value: '1',
      label: 'Angular'
    },
    {
      value: '2',
      label: 'MongoDB'
    },
    {
      value: '3',
      label: 'NodeJS'
    },
    {
      value: '4',
      label: 'Python'
    },
    {
      value: '5',
      label: 'React'
    }
  ]

  return (
    <section>
      <p className={classes.subheadingText}>Join Us</p>
      <h2 className={classes.titleText}>Let’s grow together</h2>
      <hr className={classes.horizontalBar} />
      <FormLogic
        initialValues={initialValues}
        onSubmitFinished={onSubmitFinished}
        className={classes.form}
      >
        <label>First Name</label>
        <Field
          as={InputWithError}
          type='text'
          name='firstName'
          className={classes.inputStyles}
        />
        <label>Last Name</label>
        <Field
          as={InputWithError}
          type='text'
          name='lastName'
          className={classes.inputStyles}
        />
        <label>Email</label>
        <Field
          as={InputWithError}
          type='email'
          name='email'
          className={classes.inputStyles}
        />
        <label>Skills</label>
        <FormikSelect
          name='selectSkills'
          options={skillOptions}
          placeholder='Select an skill'
        />
        <label>In one sentence, tell us what makes you unique</label>
        <Field
          as={TextAreaWithError}
          name='message'
          maxLength='200'
          className={classnames(classes.inputStyles, classes.textarea)}
        />
        <div className={classes.buttonContainer}>
          <SubmitButton
            variant='primary'
            className={classes.buttonStyles}
          >
            {submitButtonText}
          </SubmitButton>
        </div>
      </FormLogic>
    </section>
  )
}

export default JoinUsForm
