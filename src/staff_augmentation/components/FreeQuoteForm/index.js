import { Fragment, useCallback } from 'react'
import classnames from 'classnames'
import { Field } from 'formik'
import { useHistory } from 'react-router'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import ReCAPTCHAField from 'main_app/components/ReCAPTCHAField'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import FormLogic from './FormLogic'

import classes from './styles.module.scss'

function FreeQuoteForm ({
  formHeader,
  fixedFields,
  formOrigin,
  formButtonText,
  formDisclaimer,
  noAutofocus
}) {
  const history = useHistory()
  const handleSubmitFinished = useCallback(tracingId => {
    history.push('/follow-up?tracingId=' + tracingId)
  }, [history])
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
        onSubmitFinished={handleSubmitFinished}
        className={classes.form}
      >
        <Field
          as={InputWithError}
          type='text'
          name='name'
          placeholder={fixedFields.name.placeholder}
          className={classes.inputStyles}
          autoFocus={noAutofocus !== true}
        />
        <Field
          as={InputWithError}
          type='email'
          name='email'
          placeholder={fixedFields.email.placeholder}
          className={classes.inputStyles}
        />
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
