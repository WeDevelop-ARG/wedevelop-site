import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import { isFunction, isNil } from 'lodash'
import * as Yup from 'yup'
import axios from 'axios'

import { CAREER_FORM_PROCESSOR_URL } from 'main_app/constants'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  remuneration: '',
  recaptchaToken: '',
  resume: null,
  skills: []
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
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  skills: Yup.array()
    .min(1, 'Select at least one skill')
    .of(Yup.string().required())
    .required('Select a skill'),
  remuneration: Yup.string(),
  message: Yup.string().max(200),
  recaptchaToken: Yup.string().required('Please confirm you\'re not a robot.'),
  resume: Yup.mixed()
    .test('fileSize', 'Maximum file size allowed: 20MB.', value => isNil(value) || value.size <= MAX_FILE_SIZE)
    .test('fileType', 'Supported formats: PDF, Word, ODT.', value => isNil(value) || SUPPORTED_FILES.includes(value?.type))
}

function FormLogic ({ onSubmitFinished, ...props }) {
  const handleSubmit = useCallback(async (values) => {
    let error
    try {
      await axios.post(CAREER_FORM_PROCESSOR_URL, { values })
    } catch (err) {
      console.error(err)
      error = err
    }

    if (isFunction(onSubmitFinished)) onSubmitFinished(error)
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
