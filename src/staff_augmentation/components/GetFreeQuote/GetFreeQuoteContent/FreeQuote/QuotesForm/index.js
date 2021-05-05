import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import { isFunction } from 'lodash'
import * as Yup from 'yup'
import axios from 'axios'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import { STAFF_AUGMENTATION_FORM_PROCESSOR_URL } from 'main_app/constants'

const schema = Yup.object({
  email: Yup.string().email().required(),
  message: Yup.string().max(200).required(),
  recaptchaToken: Yup.string().required()
}).required()

function QuotesForm ({ initialValues, onSubmitFinished, ...props }) {
  const handleSubmit = useCallback(async (values) => {
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
      initialValues={initialValues}
      validationSchema={schema}
      {...props}
    />
  )
}

export default QuotesForm
