import * as Yup from 'yup'

import Form from 'main_app/components/Form'

const schemaShape = {
  serviceType: Yup.string().required('Select an option')
}

function FormLogic ({ initialValues, onSubmit, ...props }) {
  const schema = Yup.object(schemaShape).required()

  return (
    <Form
      onSubmit={onSubmit}
      resetOnSuccessfulSubmit
      initialValues={initialValues}
      validationSchema={schema}
      {...props}
    />
  )
}

export default FormLogic
