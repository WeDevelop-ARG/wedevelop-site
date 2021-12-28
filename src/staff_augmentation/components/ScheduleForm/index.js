import Form from 'main_app/components/Form'
import isNil from 'lodash/isNil'
import * as Yup from 'yup'

const initialValues = {
  fullName: '',
  email: '',
  company: '',
  details: '',
  filesAttached: []
}
const MAX_FILE_SIZE = 20 * 1024 * 1024 // 20 MB
const SUPPORTED_FILES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.oasis.opendocument.text'
]

const schemaShape = {
  firstName: Yup.string().required(),
  email: Yup.string().email().required(),
  company: Yup.string().optional(),
  details: Yup.string().required(),
  filesAttached: Yup.array().of(
    Yup.mixed()
    .test('fileSize', 'Maximum file size allowed: 20MB.', value => isNil(value) || value.size <= MAX_FILE_SIZE)
    .test('fileType', 'Supported formats: PDF, Word, ODT.', value => isNil(value) || SUPPORTED_FILES.includes(value?.type))
  ).optional()
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
