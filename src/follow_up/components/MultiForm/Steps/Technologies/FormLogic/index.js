import { useCallback } from 'react'
import * as Yup from 'yup'

import Form from 'main_app/components/Form'

const schema = Yup.object({
  technologies: Yup.array()
    .min(1, 'Select at least one skill')
    .of(Yup.string().required())
    .required('Select a skill')
})

function FormLogic ({ initialValues, ...props }) {
  const handleSubmit = useCallback(async (values) => {
    try {
      console.log(values)
    } catch (err) {
      console.error(err)
    }
  }, [])

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
