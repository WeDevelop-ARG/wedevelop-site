import classnames from 'classnames'
import { Field } from 'formik'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import ReCAPTCHAField from 'main_app/components/ReCAPTCHAField'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import FormLogic from './FormLogic'

import classes from './styles.module.scss'

function FreeQuoteForm ({
  onSubmitFinished,
  submitButtonText,
  fixedFieldsPlaceholders,
  customFields,
  formOrigin
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
    name: '',
    email: '',
    message: '',
    recaptchaToken: ''
  }

  customFields?.forEach(({ name, initialValue = '' }) => {
    initialValues[name] = initialValue
  })

  return (
    <FormLogic
      initialValues={initialValues}
      formOrigin={formOrigin}
      customFields={customFields}
      onSubmitFinished={onSubmitFinished}
      className={classes.form}
    >
      <Field
        as={InputWithError}
        type='text'
        name='name'
        placeholder={fixedFieldsPlaceholders.name}
        className={classes.inputStyles}
      />
      <Field
        as={InputWithError}
        type='email'
        name='email'
        placeholder={fixedFieldsPlaceholders.email}
        className={classes.inputStyles}
      />
      {customFields?.map(({ name, placeholder }) => (
        <Field
          key={name}
          as={InputWithError}
          type='text'
          name={name}
          placeholder={placeholder}
          className={classes.inputStyles}
        />
      ))}
      <Field
        as={TextAreaWithError}
        name='message'
        placeholder={fixedFieldsPlaceholders.message}
        maxLength='200'
        className={classnames(classes.inputStyles, classes.textarea)}
      />
      <ReCAPTCHAField name='recaptchaToken' />
      <div className={classes.buttonContainer}>
        <SubmitButton
          variant='primary'
          className={classes.buttonStyles}
        >
          {submitButtonText}
        </SubmitButton>
      </div>
    </FormLogic>
  )
}

export default FreeQuoteForm
