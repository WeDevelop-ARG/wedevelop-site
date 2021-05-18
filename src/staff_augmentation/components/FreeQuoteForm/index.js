import classnames from 'classnames'
import { Field } from 'formik'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import FormLogic from './FormLogic'

import classes from './styles.module.scss'

function FreeQuoteForm ({ onSubmitFinished }) {
  const TextAreaWithError = useFieldWithErrorClassName(
    Textarea,
    classes.fieldWithError
  )
  const InputWithError = useFieldWithErrorClassName(
    'input',
    classes.fieldWithError
  )
  const initialValues = {
    name: '',
    email: '',
    message: ''
  }

  return (
    <FormLogic
      initialValues={initialValues}
      onSubmitFinished={onSubmitFinished}
      className={classes.form}
    >
      <Field
        as={InputWithError}
        type='text'
        name='name'
        placeholder='Your name'
        className={classes.inputStyles}
      />
      <Field
        as={InputWithError}
        type='email'
        name='email'
        placeholder='Your work email'
        className={classes.inputStyles}
      />
      <Field
        as={TextAreaWithError}
        name='message'
        placeholder='What are you looking for?'
        maxLength='200'
        className={classnames(classes.inputStyles, classes.textarea)}
      />
      <div className={classes.buttonContainer}>
        <SubmitButton
          variant='primary'
          className={classes.buttonStyles}
        >
          Get a free quote
        </SubmitButton>
      </div>
    </FormLogic>
  )
}

export default FreeQuoteForm
