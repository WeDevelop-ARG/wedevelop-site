import Form from 'main_app/components/Form'
import { useCallback } from 'react'
import { isFunction } from 'lodash'
import * as Yup from 'yup'
import axios from 'axios'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import { CAREER_FORM_PROCESSOR_URL } from 'main_app/constants'

const MAX_FILE_SIZE = 20971520
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
  remuneration: Yup.string(),
  message: Yup.string().max(200),
  resume: Yup.mixed().required('Must attach your Resume/CV.')
    .test('fileSize', 'Maximum file size allowed: 20MB.', value => value?.size <= MAX_FILE_SIZE)
    .test('fileType', 'Supported formats: PDF, Word, ODT.', value => SUPPORTED_FILES.includes(value?.type))
}

function FormLogic ({ initialValues, onSubmitFinished, ...props }) {
  const handleSubmit = useCallback(async (values) => {
    try {
      await axios.post(CAREER_FORM_PROCESSOR_URL, { values })
      logAnalyticsEvent({
        event: '',
        contactType: '',
        source: ''
      })
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
