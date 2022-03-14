import { useCallback, useState } from 'react'
import { Field } from 'formik'
import isNil from 'lodash/isNil'
import isUndefined from 'lodash/isUndefined'
import Image from 'main_app/components/Image'

import { INITIAL_LANDING_FORM_PROCESSOR_URL } from 'main_app/constants'

import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import uploadFile from 'service_providers/firebase/uploadFile'

import Button from 'main_app/components/Button'
import ErrorUploadingFile from 'staff_augmentation/components/ErrorUploadingFile'
import SubmitButton from 'main_app/components/SubmitButton'
import FileInput from 'careers/components/JoinUsForm/FileInput'
import UploadingFile from 'staff_augmentation/components/UploadingFile'

import ContactPopupModal from '../ContactPopupModal'
import ScheduleForm from '../ScheduleForm'

import ClipIcon from 'assets/career/clip.svg'

import classes from './styles.module.scss'

export default function ScheduleFormModal ({
  isModalOpen,
  setModalOpen,
  onScheduleMeetingClick,
  onSubmit,
  formOrigin
}) {
  const InputWithError = useFieldWithErrorClassName(
    'input',
    classes.fieldWithError
  )
  const TextAreaWithError = useFieldWithErrorClassName(
    'textarea',
    classes.fieldWithError
  )

  const [fileUploadProgress, setFileUploadProgress] = useState()
  const [fileUploadError, setFileUploadError] = useState()

  const handleFormSubmit = useCallback(async (values) => {
    setFileUploadError(undefined)

    try {
      let filePath
      if (!isNil(values.filesAttached)) {
        try {
          filePath = await uploadFile(values.filesAttached, setFileUploadProgress)
          setFileUploadProgress(undefined)
        } catch (error) {
          setFileUploadError(error)
          throw error
        }
      }

      await window.fetch(INITIAL_LANDING_FORM_PROCESSOR_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.fullName,
          email: values.email,
          company: values.company ?? '',
          message: values.details,
          filePath: filePath ?? '',
          formOrigin
        })
      })
      logAnalyticsEvent({
        event: 'contact',
        contactType: 'free-quote-form',
        source: formOrigin
      })
      // LinkedIn Ad Conversion Event
      try { window?.lintrk?.('track', { conversion_id: 6505732 }) } catch (e) {}
      onSubmit?.()
    } catch (err) {
      console.error(err)
    }
  }, [onSubmit, formOrigin])

  return (
    <ContactPopupModal
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      title="We'd love hear from you"
      label='Get Custom Solutions, Recommendations, Resumes, or Estimates. Confidentiality & Same Day Response Guaranteed!'
      sidebarContent={
        <span>
          One of our Account Managers will contact you shortly. <br /><br />
          We usually get back in two hours or less. Should you need a faster response,{' '}
          <Button variant='link' className={classes.bookTimeButton} onClick={() => onScheduleMeetingClick?.()}>book a time here</Button>.
        </span>
      }
    >
      <ScheduleForm
        onSubmit={handleFormSubmit}
        className={classes.form}
      >
        <label className={classes.labels}>
          <span>*</span>{' '}Full Name
          <Field
            as={InputWithError}
            type='text'
            name='fullName'
            autoFocus
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
          Company
          <Field
            as={InputWithError}
            type='text'
            name='company'
            className={classes.inputStyles}
          />
        </label>
        <label className={classes.labels}>
          <span>*</span>{' '}What can we do for you?
          <Field
            as={TextAreaWithError}
            type='text'
            name='details'
            className={classes.textAreaStyles}
          />
        </label>
        {(isUndefined(fileUploadProgress) && isUndefined(fileUploadError)) &&
          <label className={classes.fileUploadField}>
            <Field
              name='filesAttached'
              component={FileInput}
              aria-hidden='true'
            >
              <div className={classes.field}>
                <Image layout='fixed' src={ClipIcon} alt='' />
                <p className={classes.fileUploadLabel}>Attach</p>
              </div>
            </Field>
          </label>}
        {(!isUndefined(fileUploadProgress) && isUndefined(fileUploadError)) &&
          <UploadingFile
            inputName='filesAttached'
            currentProgress={fileUploadProgress}
          />}
        {!isUndefined(fileUploadError) &&
          <ErrorUploadingFile
            retryButtonProps={{
              type: 'submit'
            }}
          />}
        <div className={classes.buttonContainer}>
          <SubmitButton
            variant='primary'
            className={classes.submitButton}
          >
            Enquire Now
          </SubmitButton>
        </div>
      </ScheduleForm>
    </ContactPopupModal>
  )
}
