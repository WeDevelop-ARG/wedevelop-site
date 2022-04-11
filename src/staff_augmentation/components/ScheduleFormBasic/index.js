import Form from 'main_app/components/Form'
import * as Yup from 'yup'

import { Field } from 'formik'
import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'

import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import * as classes from './styles.module.scss'
import classNames from 'classnames'

const initialValues = {
  email: '',
  details: ''
}

const schemaShape = {
  email: Yup.string().email().required(),
  details: Yup.string().required()
}

export default function ScheduleFormBasic ({ onSubmit, ...props }) {
  const schema = Yup.object(schemaShape).required()
  const InputWithError = useFieldWithErrorClassName('input', classes.fieldWithError)
  const TextAreaWithError = useFieldWithErrorClassName(Textarea, classes.fieldWithError)

  return (
    <Form
      className={classes.scheduleFormBasic}
      onSubmit={onSubmit}
      validationSchema={schema}
      initialValues={initialValues}
      {...props}
    >
      <label className={classes.labels}>
        <span>Your work email</span>
        <Field
          as={InputWithError}
          type='email'
          name='email'
          className={classes.scheduleFormBasicInput}
        />
      </label>
      <label className={classes.scheduleFormBasicTextAreaLabel}>
        <span>What can we do for you?</span>
        <Field
          as={TextAreaWithError}
          type='text'
          name='description'
          className={classNames(classes.scheduleFormBasicInput, classes.scheduleFormBasicTextArea)}
        />
      </label>
      <div>
        <SubmitButton
          variant='primary'
          className={classes.buttonStyles}
        >
          Get in touch
        </SubmitButton>
      </div>
    </Form>
  )
}
