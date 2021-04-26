import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import { isFunction } from 'lodash'
import * as Yup from 'yup'
import axios from 'axios'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import {
  CONTACT_FORM_DESTINATION_EMAIL,
  MAILER_URL,
  STAFF_AUGMENTATION_FORM_PROCESSOR_URL
} from 'main_app/constants'

const schema = Yup.object({
  email: Yup.string().email().required(),
  message: Yup.string().max(200).required()
}).required()

function QuotesForm ({ initialValues, onSubmitFinished, ...props }) {
  const handleSubmit = useCallback(async (values) => {
    const message = `
      New message received from Free Quote form, Staff Augmentation landing page:

      ${values.message}
    `

    const data = {
      personalizations: [{
        to: [{ email: CONTACT_FORM_DESTINATION_EMAIL }],
        subject: 'New message from WeDevelop site'
      }],
      from: {
        email: values.email
      },
      content: [{
        type: 'text/plain',
        value: message
      }]
    }

    try {
      await axios.post(MAILER_URL, data)
    } catch (_) {
      window.alert('An error occurred while sending your message.\n\nPlease contact us at info@wedevelop.me')

      return undefined
    }

    try {
      await axios.post(STAFF_AUGMENTATION_FORM_PROCESSOR_URL, values)
      logAnalyticsEvent({
        event: 'contact',
        contactType: 'free-quote-form',
        source: 'staff-augmentation'
      })
    } catch (err) {
      console.error(err)
    }

    if (isFunction(onSubmitFinished)) onSubmitFinished()
  }, [onSubmitFinished])

  return (
    <Form
      onSubmit={handleSubmit}
      resetOnSuccessfulSubmit
      initialValues={{
        initialValues
      }}
      validationSchema={schema}
      {...props}
    />
  )
}

export default QuotesForm
