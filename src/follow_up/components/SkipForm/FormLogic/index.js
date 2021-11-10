import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import isFunction from 'lodash/isFunction'
import * as Yup from 'yup'

const schemaShape = {
  comment: Yup.string().max(200)
}

function FormLogic ({ initialValues, onSubmitFinished, ...props }) {
  const handleSubmit = useCallback(async (values) => {
    try {
      console.log(values)
    } catch (err) {
      console.error(err)
    }

    if (isFunction(onSubmitFinished)) onSubmitFinished()
  }, [onSubmitFinished])

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
