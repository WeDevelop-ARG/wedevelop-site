import Form from 'main_app/components/Form'
import isNil from 'lodash/isNil'
import * as Yup from 'yup'

const initialValues = {
  fullName: '',
  email: '',
  company: '',
  details: '',
  filesAttached: null
}
const MAX_FILE_SIZE = 20 * 1024 * 1024 // 20 MB

const schemaShape = {
  fullName: Yup.string().required(),
  email: Yup.string().email().required(),
  company: Yup.string().optional(),
  details: Yup.string().required(),
  filesAttached: Yup.mixed()
    .test('fileSize', 'Maximum file size allowed: 20MB.', value => {
      return isNil(value) || value?.size <= MAX_FILE_SIZE
    })
}

export default function ScheduleForm ({ onSubmit, ...props }) {
  const schema = Yup.object(schemaShape).required()

  return (
    <Form
      onSubmit={onSubmit}
      validationSchema={schema}
      initialValues={initialValues}
      {...props}
    />
  )
}
