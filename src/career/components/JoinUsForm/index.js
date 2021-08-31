import classnames from 'classnames'
import { Field, ErrorMessage } from 'formik'
import { InputGroup } from 'react-bootstrap'
import { isNil } from 'lodash'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import SVGIcon from 'main_app/components/SVGIcon'
import FileInput from './FileInput'
import ReCAPTCHAField from 'main_app/components/ReCAPTCHAField'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import FormLogic from './FormLogic'
import FormikSelect from './FormikSelect/index'

import classes from './styles.module.scss'

const skillOptions = [{
  value: 'ANGULAR',
  label: 'Angular'
}, {
  value: 'MONGODB',
  label: 'MongoDB'
}, {
  value: 'NODEJS',
  label: 'NodeJS'
}, {
  value: 'PYTHON',
  label: 'Python'
}, {
  value: 'REACT',
  label: 'React'
}]

function JoinUsForm ({
  onSubmitFinished,
  submitButtonText
}) {
  const TextAreaWithError = useFieldWithErrorClassName(
    Textarea,
    classes.fieldWithError
  )
  const InputWithError = useFieldWithErrorClassName(
    'input',
    classes.fieldWithError
  )

  return (
    <section>
      <p className={classes.subheadingText}>Join Us</p>
      <h2 className={classes.titleText}>Let’s grow together</h2>
      <hr className={classes.horizontalBar} />
      <FormLogic
        onSubmitFinished={onSubmitFinished}
        className={classes.form}
      >
        <label className={classes.labels}>
          <span>*</span>{' '}First Name
          <Field
            as={InputWithError}
            type='text'
            name='firstName'
            className={classes.inputStyles}
          />
        </label>
        <label className={classes.labels}>
          <span>*</span>{' '}Last Name
          <Field
            as={InputWithError}
            type='text'
            name='lastName'
            className={classes.inputStyles}
          />
        </label>
        <label className={classes.labels}>
          <span>*</span>{' '}Email
          <Field
            as={InputWithError}
            type='email'
            name='email'
            className={classes.inputStyles}
          />
        </label>
        <label className={classes.labels}>
          <span>*</span>{' '}Skills
          <FormikSelect
            name='skills'
            options={skillOptions}
            placeholder='Select your skills'
          />
        </label>
        <label className={classes.labels}>
          Intended Remuneration (monthly)
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
        </label>
        <label className={classes.labels}>
          In one sentence, tell us what makes you unique
          <Field
            as={TextAreaWithError}
            name='message'
            maxLength='200'
            className={classnames(classes.inputStyles, classes.textarea)}
          />
        </label>
        <label className={classes.fileUploadField}>
          Resume/CV
          <Field
            name='resume'
            component={FileInput}
            aria-hidden='true'
          />
          <div className={classes.field}>
            <SVGIcon name='career/clip' className={classes.clip} />
            <Field
              name='resume'
              render={(props) => isNil(props.meta.value) ? 'Attach' : '1 file selected'}
            />
          </div>
          <ErrorMessage name='resume' component='div' className={classes.errorMessage} />
        </label>
        <ReCAPTCHAField name='recaptchaToken' />
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
