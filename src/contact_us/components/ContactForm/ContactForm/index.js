import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import * as Yup from 'yup'

import { MAILER_URL } from 'main_app/constants'

const defaultInitialValues = {
  iAm: 'startup',
  lookingTo: 'validate_idea',
  name: '',
  email: '',
  message: ''
}

const schema = Yup.object({
  iAm: Yup.string().required(),
  lookingTo: Yup.string().required(),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().max(120).required()
}).required()

function ContactForm ({ initialValues, ...props }) {
  const handleSubmit = useCallback(async (values) => {
    const message = `
      I am ${values.iAm}, looking to ${values.lookingTo.replace(/_/g, ' ')}

      ${values.message}
    `

    const data = {
      personalizations: [{
        to: [{ email: 'staffing@wedevelop.com' }],
        subject: 'New message from WeDevelop site'
      }],
      from: {
        email: values.email,
        name: values.name
      },
      content: [{
        type: 'text/plain',
        value: message
      }]
    }

    try {
      await window.fetch(MAILER_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      window.alert('Message sent successfully')
    } catch (_) {
      window.alert('An error occurred while sending your message.\n\nPlease contact us at staffing@wedevelop.com')
    }
  }, [])

  return (
    <Form
      onSubmit={handleSubmit}
      resetOnSuccessfulSubmit
      initialValues={{
        ...defaultInitialValues,
        ...initialValues
      }}
      validationSchema={schema}
      {...props}
    />
  )
}

export default ContactForm
