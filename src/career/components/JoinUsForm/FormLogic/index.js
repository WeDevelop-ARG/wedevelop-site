import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import { isFunction } from 'lodash'
import * as Yup from 'yup'

const schemaShape = {
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().max(200).required(),
  skillOptions: Yup.array()
    .min(3, 'Select an skill')
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required()
      })
    )
}

function FormLogic ({ onSubmitFinished, formOrigin, ...props }) {
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
      {...props}
    />
  )
}

export default FormLogic
