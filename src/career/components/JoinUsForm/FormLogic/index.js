import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import isNil from 'lodash/isNil'
import isFunction from 'lodash/isFunction'
import * as Yup from 'yup'

import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import uploadFile from 'service_providers/firebase/uploadFile'

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
  const handleSubmit = useCallback(async (values, actions) => {
    let error
    try {
      const path = values.resume && await uploadFile(values.resume)
      const response = await window.fetch(CAREER_FORM_PROCESSOR_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...values, resume: path })
      })
      if (!response?.ok) throw new Error('Response not successful')
      logAnalyticsEvent({
        event: 'join-us-form-submit',
        contactType: 'careers-form',
        source: 'careers'
      })
      actions.resetForm()
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
      validationSchema={schema}
      initialValues={initialValues}
      {...props}
    />
  )
}

export default FormLogic
