import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import isFunction from 'lodash/isFunction'
import * as Yup from 'yup'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import { STAFF_AUGMENTATION_FORM_PROCESSOR_URL } from 'main_app/constants'

const schemaShape = {
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().max(200).required(),
  recaptchaToken: Yup.string().required()
}

function FormLogic ({ initialValues, customFields, onSubmitFinished, formOrigin, ...props }) {
  const handleSubmit = useCallback(async (values) => {
    try {
      await fetch(STAFF_AUGMENTATION_FORM_PROCESSOR_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...values, formOrigin })
      })
      logAnalyticsEvent({
        event: 'contact',
        contactType: 'free-quote-form',
        source: formOrigin
      })
    } catch (err) {
      console.error(err)
    }

    if (isFunction(onSubmitFinished)) onSubmitFinished()
  }, [onSubmitFinished, formOrigin])

  customFields?.forEach(({ name, required }) => {
    let validator = Yup.string()
    if (required) validator = validator.required()
    schemaShape[name] = validator
  })

  const schema = Yup.object(schemaShape).required()

  return (
    <Form
      onSubmit={handleSubmit}
      resetOnSuccessfulSubmit
      initialValues={initialValues}
      validationSchema={schema}
      {...props}
    />
  )
}

export default FormLogic
