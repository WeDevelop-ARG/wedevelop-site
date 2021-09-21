import { Fragment } from 'react'
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
  formHeader,
  fixedFields,
  customFields,
  formOrigin,
  formButtonText,
  formDisclaimer
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
    <>
      <div className={classes.formHeader}>
        <p className={classes.subheadingText}>{formHeader.subtitle}</p>
        <h2 className={classes.titleText}>{formHeader.title}</h2>
        <p className={classes.descriptionText}>{formHeader.description}</p>
        <hr className={classes.horizontalBar} />
      </div>
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
          placeholder={fixedFields.name.placeholder}
          className={classes.inputStyles}
          autoFocus
        />
        <Field
          as={InputWithError}
          type='email'
          name='email'
          placeholder={fixedFields.email.placeholder}
          className={classes.inputStyles}
        />
        {customFields?.map(({ label, name, placeholder }) => (
          <Fragment key={name}>
            <label key={name} className={classes.fieldLabel}>{label}</label>
            <Field
              key={name}
              as={InputWithError}
              type='text'
              name={name}
              placeholder={placeholder}
              className={classes.inputStyles}
            />
          </Fragment>
        ))}
        <label className={classes.fieldLabel}>{fixedFields.message.label}</label>
        <Field
          as={TextAreaWithError}
          name='message'
          placeholder={fixedFields.message.placeholder}
          maxLength='200'
          className={classnames(classes.inputStyles, classes.textarea)}
        />
        <ReCAPTCHAField name='recaptchaToken' className={classes.recaptcha} />
        <div className={classes.buttonContainer}>
          <SubmitButton
            variant='primary'
            className={classes.buttonStyles}
          >
            {formButtonText}
          </SubmitButton>
        </div>
        <div className={classes.formDisclaimer}>
          <p>{formDisclaimer}</p>
        </div>
      </FormLogic>
    </>
  )
}

export default FreeQuoteForm
