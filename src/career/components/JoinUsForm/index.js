import classnames from 'classnames'
import { Field, ErrorMessage } from 'formik'
import Select from 'react-select'
import { InputGroup } from 'react-bootstrap'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import SVGIcon from 'main_app/components/SVGIcon'
import FileInput from './FileInput'
import ReCAPTCHAField from 'main_app/components/ReCAPTCHAField'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import FormLogic from './FormLogic'

import classes from './styles.module.scss'

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
          <Select
            isMulti
            name='skills'
            options={skill}
            className='basic-multi-select'
            classNamePrefix='select'
            placeholder='Select an skill'
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
        <label className={classes.labels}>In one sentence, tell us what makes you unique</label>
        <Field
          as={TextAreaWithError}
          name='message'
          maxLength='200'
          className={classnames(classes.inputStyles, classes.textarea)}
        />
        <div className={classes.fileUploadField}>
          <label>
            Resume/CV
            <div className={classes.fileInputContainer}>
              <Field
                name='resume'
                component={FileInput}
                aria-hidden='true'
              />
              <div className={classes.fileUploadMask}>
                <SVGIcon name='career/clip' className={classes.clip} />
                Attach
              </div>
            </div>
            <ErrorMessage name='resume' component='span' className={classes.fileUploadErrorMessage} />
          </label>
        </div>
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
