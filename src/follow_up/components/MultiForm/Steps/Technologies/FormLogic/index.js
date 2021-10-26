import * as Yup from 'yup'

import Form from 'main_app/components/Form'

const schemaShape = {
  technologies: Yup.array()
    .min(1, 'Select at least one skill')
    .of(Yup.string().required())
    .required('Select a skill')
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
