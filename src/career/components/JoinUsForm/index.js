import classnames from 'classnames'
import { Field } from 'formik'
import Select from 'react-select'
import { InputGroup } from 'react-bootstrap'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import FormLogic from './FormLogic'

import classes from './styles.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function JoinUsForm ({
  onSubmitFinished,
  submitButtonText,
  fixedFieldsPlaceholders,
  customFields,
  formOrigin
}) {
  const TextAreaWithError = useFieldWithErrorClassName(
    Textarea,
    classes.fieldWithError
  )
  const InputWithError = useFieldWithErrorClassName(
    'input',
    classes.fieldWithError
  )
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    remuneration: '',
    message: ''
  }
  const skill = [
    { label: 'Angular' },
    { label: 'MongoDB' },
    { label: 'NodeJS' },
    { label: 'Python' },
    { label: 'React' }
  ].map(skill => ({
    value: skill.label,
    label: skill.label
  }))

  customFields?.forEach(({ name, initialValue = '' }) => {
    initialValues[name] = initialValue
  })

  return (
    <section>
      <p className={classes.subheadingText}>Join Us</p>
      <h2 className={classes.titleText}>Let’s grow together</h2>
      <hr className={classes.horizontalBar} />
      <FormLogic
        initialValues={initialValues}
        formOrigin={formOrigin}
        customFields={customFields}
        onSubmitFinished={onSubmitFinished}
        className={classes.form}
      >
        <label className={classes.labels}><span>*</span>{' '}First Name</label>
        <Field
          as={InputWithError}
          type='text'
          name='firstName'
          className={classes.inputStyles}
        />
        <label className={classes.labels}><span>*</span>{' '}Last Name</label>
        <Field
          as={InputWithError}
          type='text'
          name='lastName'
          className={classes.inputStyles}
        />
        <label className={classes.labels}><span>*</span>{' '}Email</label>
        <Field
          as={InputWithError}
          type='email'
          name='email'
          className={classes.inputStyles}
        />
        <label className={classes.labels}><span>*</span>{' '}Skills</label>
        <Select
          isMulti
          name='skills'
          options={skill}
          className='basic-multi-select'
          classNamePrefix='select'
          placeholder='Select an skill'
        />
        <label className={classes.labels}>Intended Remuneration (monthly)</label>
        <InputGroup className={classes.remunerationGroup}>
          <InputGroup.Text className={classes.currency}>$</InputGroup.Text>
          <Field
            as={InputWithError}
            type='text'
            name='remuneration'
            placeholder='0.0'
            className={classes.remuneration}
          />
        </InputGroup>
        <label className={classes.labels}>In one sentence, tell us what makes you unique</label>
        <Field
          as={TextAreaWithError}
          name='message'
          maxLength='200'
          className={classnames(classes.inputStyles, classes.textarea)}
        />
        <div className={classes.buttonContainer}>
          <SubmitButton
            variant='primary'
            className={classes.buttonStyles}
          >
            {submitButtonText}
          </SubmitButton>
        </div>
      </FormLogic>
    </section>
  )
}

export default JoinUsForm
