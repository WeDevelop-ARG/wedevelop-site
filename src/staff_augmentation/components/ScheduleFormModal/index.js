import Button from 'main_app/components/Button'
import { useCallback } from 'react'
import { Field } from 'formik'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'
import ContactPopupModal from '../ContactPopupModal'
import classes from './styles.module.scss'
import ScheduleForm from '../ScheduleForm'
import SubmitButton from 'main_app/components/SubmitButton'
import uploadFile from 'service_providers/firebase/uploadFile'

export default function ScheduleFormModal({
  isModalOpen,
  setModalOpen,
  onScheduleMeetingClick
}) {
  const InputWithError = useFieldWithErrorClassName(
    'input',
    classes.fieldWithError
  )
  const TextAreaWithError = useFieldWithErrorClassName(
    'textarea',
    classes.fieldWithError
  )

  const handleFormSubmit = useCallback(() => {

  }, [])

  return (
    <ContactPopupModal 
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      title="We'd love hear from you"
      label="Get Custom Solutions, Recommendations, Resumes, or, Estimates. Confidentiality & Same Day Response Guaranteed!"
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
            name='firstName'
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
            name='details'
            className={classes.textAreaStyles}
          />
        </label>
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