import classnames from 'classnames'
import { Field } from 'formik'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import ReCAPTCHAField from 'main_app/components/ReCAPTCHAField'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import QuotesForm from './QuotesForm'

import classes from './styles.module.scss'

function FreeQuote ({ className, onSubmitFinished }) {
  const TextAreaWithError = useFieldWithErrorClassName(
    Textarea,
    classes.fieldWithError
  )
  const InputWithError = useFieldWithErrorClassName(
    'input',
    classes.fieldWithError
  )
  const initialValues = {
    email: '',
    message: '',
    recaptchaToken: ''
  }
  const messageExample = 'I need a Senior Ruby on Rails Developer, with experience in AWS and Elastic Search. He or she has to be a really good problem-solver and a key team player.'

  return (
    <QuotesForm
      initialValues={initialValues}
      onSubmitFinished={onSubmitFinished}
      className={classnames(classes.form, { [className]: className })}
    >
      <label className={classes.label}>
        Email
        <Field
          as={InputWithError}
          type='email'
          name='email'
          placeholder='Email'
          className={classes.inputStyles}
        />
      </label>
      <label className={classes.label}>
        What are you looking for?
        <Field
          as={TextAreaWithError}
          name='message'
          placeholder={messageExample}
          maxLength='200'
          className={classnames(classes.inputStyles, classes.textarea)}
        />
      </label>
      <ReCAPTCHAField name='recaptchaToken' />
      <div className={classes.buttonContainer}>
        <SubmitButton
          variant='primary'
          className={classes.buttonStyles}
        >
          Get a free quote
        </SubmitButton>
      </div>
    </QuotesForm>
  )
}

export default FreeQuote
