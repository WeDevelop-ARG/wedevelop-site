import Form from 'main_app/components/Form'
import * as Yup from 'yup'

import { Field } from 'formik'
import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'

import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import * as classes from './styles.module.scss'

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
      onSubmit={onSubmit}
      validationSchema={schema}
      initialValues={initialValues}
      {...props}
    >
      <label className={classes.labels}>
        Your work email
        <Field
          as={InputWithError}
          type='email'
          name='email'
          className={classes.inputStyles}
        />
      </label>
      <label className={classes.labels}>
        What can we do for you?
        <Field
          as={TextAreaWithError}
          type='text'
          name='description'
          className={classes.inputStyles}
        />
      </label>
      <div className={classes.buttonContainer}>
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
