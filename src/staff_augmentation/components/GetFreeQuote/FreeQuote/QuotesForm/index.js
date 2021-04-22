import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import * as Yup from 'yup'
import axios from 'axios'

import { MAILER_URL, PROCESS_STAFF_AUGMENTATION_FORM_SUBMIT } from 'main_app/constants'

const schema = Yup.object({
  email: Yup.string().email().required(),
  message: Yup.string().max(200).required()
}).required()

function QuotesForm ({ initialValues, ...props }) {
  const handleSubmit = useCallback(async (values) => {
    const message = `
      New message received from Free Quote form, Staff Augmentation landing page:

      ${values.message}
    `

    const data = {
      personalizations: [{
        to: [{ email: 'info@wedevelop.me' }],
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
      await axios.post(PROCESS_STAFF_AUGMENTATION_FORM_SUBMIT, { data })
      window.alert('Message sent successfully')
    } catch (_) {
      window.alert('An error occurred while sending your message.\n\nPlease contact us at info@wedevelop.me')
    }
  }, [])

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
