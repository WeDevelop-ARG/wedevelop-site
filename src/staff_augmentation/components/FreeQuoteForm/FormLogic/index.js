import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import isFunction from 'lodash/isFunction'
import * as Yup from 'yup'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import { INITIAL_LANDING_FORM_PROCESSOR_URL } from 'main_app/constants'

const schemaShape = {
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().max(200).required(),
  recaptchaToken: Yup.string().required()
}

function FormLogic ({ initialValues, onSubmitFinished, formOrigin, ...props }) {
  const handleSubmit = useCallback(async (values) => {
    let tracingId
    try {
      const response = await window.fetch(INITIAL_LANDING_FORM_PROCESSOR_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...values, formOrigin })
      })
      logAnalyticsEvent({
        event: 'contact',
        contactType: 'free-quote-form',
        source: formOrigin
      })
      const responseJSON = await response.json()
      tracingId = responseJSON.tracingId
    } catch (err) {
      console.error(err)
    }

    if (isFunction(onSubmitFinished)) onSubmitFinished(tracingId)
  }, [onSubmitFinished, formOrigin])

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
