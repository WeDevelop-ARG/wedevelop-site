import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import { isFunction } from 'lodash'
import * as Yup from 'yup'
import axios from 'axios'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

const schemaShape = {
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().max(200).required()
}

function FormLogic ({ initialValues, customFields, onSubmitFinished, formOrigin, ...props }) {
  const handleSubmit = useCallback(async (values) => {
    try {
      await axios.post('', { ...values, formOrigin })
      logAnalyticsEvent({
        event: '',
        contactType: '',
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
