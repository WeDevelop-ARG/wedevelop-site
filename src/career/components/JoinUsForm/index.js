import { useState, useCallback } from 'react'
import isUndefined from 'lodash/isUndefined'
import classnames from 'classnames'
import { Field, ErrorMessage } from 'formik'
import InputGroup from 'react-bootstrap/InputGroup'
import Image from 'next/image'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import FormikSelect from 'main_app/components/FormikSelect'
import ReCAPTCHAField from 'main_app/components/ReCAPTCHAField'
import WrappedImage from 'main_app/components/WrappedImage'

import FileInput from './FileInput'
import UploadingFile from 'staff_augmentation/components/UploadingFile'
import ErrorUploadingFile from 'staff_augmentation/components/ErrorUploadingFile'

import useSkillOptions from 'main_app/components/useSkillOptions'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import FormLogic from './FormLogic'
import CountrySelect from './CountrySelect'

import DotsPattern from 'assets/about_us/dots_pattern.svg'
import Clip from 'assets/career/clip.svg'
import HalfCircle from 'assets/home/services/half_circle.svg'

import classes from './styles.module.scss'

function JoinUsForm () {
  const skillOptions = useSkillOptions()
  const TextAreaWithError = useFieldWithErrorClassName(
    Textarea,
    classes.fieldWithError
  )
  const InputWithError = useFieldWithErrorClassName(
    'input',
    classes.fieldWithError
  )

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState()
  const [fileUploadProgress, setFileUploadProgress] = useState()
  const [fileUploadError, setFileUploadError] = useState()

  const onSubmitFinished = useCallback((err) => {
    setIsSubmitted(true)
    setError(err)
  }, [])

  return (
    <section className={classes.joinUsSection}>
      <p className={classes.subheadingText}>Join Us</p>
      <h2 className={classes.titleText}>Let’s grow together</h2>
      <hr className={classes.horizontalBar} />
      <FormLogic
        onSubmitFinished={onSubmitFinished}
        className={classes.form}
        setFileUploadProgress={setFileUploadProgress}
        setFileUploadError={setFileUploadError}
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
          <ErrorMessage name='skills' component='div' className={classes.errorMessage} />
        </label>
        <label className={classes.labels}>
          <span>*</span>{' '}Where are you from?
          <CountrySelect
            name='country'
            placeholder='Select your country'
          />
          <ErrorMessage name='country' component='div' className={classes.errorMessage} />
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
          <span className={classes.fileUploadLabel}>Resume/CV</span>
          {(isUndefined(fileUploadProgress) && isUndefined(fileUploadError)) &&
            <Field
              name='resume'
              component={FileInput}
              aria-hidden='true'
            >
              <div className={classes.field}>
                <WrappedImage src={Clip} layout='fixed' className={classes.clip} alt='' />
                Attach
              </div>
            </Field>}
          {(!isUndefined(fileUploadProgress) && isUndefined(fileUploadError)) &&
            <UploadingFile
              inputName='resume'
              currentProgress={fileUploadProgress}
            />}
          {!isUndefined(fileUploadError) &&
            <ErrorUploadingFile
              retryButtonProps={{
                type: 'submit'
              }}
            />}
          <ErrorMessage name='resume' component='div' className={classes.errorMessage} />
        </label>
        <ReCAPTCHAField name='recaptchaToken' />
        {isSubmitted && error && (
          <p className={classes.submitError}>
            Oops! An error occurred and we couldn't receive your application. Please try again later.
          </p>
        )}
        {isSubmitted && !error && (
          <p className={classes.submitSuccessful}>
            Your application has been received successfully. We'll contact you soon.
          </p>
        )}
        <div className={classes.buttonContainer}>
          <SubmitButton
            variant='primary'
            className={classes.buttonStyles}
          >
            Join Us
          </SubmitButton>
        </div>
      </FormLogic>
      <div className={classes.filledCircle} aria-hidden='true' />
      <div className={classes.emptyCircle} aria-hidden='true' />
      <div className={classes.smallBlurCircle} aria-hidden='true' />
      <WrappedImage src={DotsPattern} layout='intrinsic' alt='' className={classes.topLeftDotsPattern} aria-hidden='true' />
      <WrappedImage src={HalfCircle} layout='intrinsic' className={classes.halfCircle} />
      <div className={classes.leftSmallBlurCircle} />
      <div className={classes.leftFilledCircle} />
      <div className={classes.leftEmptyCircle} />
      <div className={classes.leftSmallCircle} />
    </section>
  )
}

export default JoinUsForm
