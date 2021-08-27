import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import { isFunction } from 'lodash'
import * as Yup from 'yup'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  remuneration: '',
  recaptchaToken: ''
}

const schemaShape = {
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  remuneration: Yup.string(),
  message: Yup.string().max(200)
}

function FormLogic ({ onSubmitFinished, ...props }) {
  const handleSubmit = useCallback(async (values) => {
    // TODO: implement submit handler try {} catch (err) {}

    if (isFunction(onSubmitFinished)) onSubmitFinished()
  }, [onSubmitFinished])

  const schema = Yup.object(schemaShape).required()

  return (
    <Form
      onSubmit={handleSubmit}
      resetOnSuccessfulSubmit
      validationSchema={schema}
      initialValues={initialValues}
      {...props}
    />
  )
}

export default FormLogic
