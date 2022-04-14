import { useCallback } from 'react'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

import { Field } from 'formik'
import * as Yup from 'yup'

import classNames from 'classnames'

import InfoIconFilled from 'assets/staff_augmentation/info_icon_filled.svg'
import AvatarTeamwork from 'assets/staff_augmentation/avatar_teamwork.svg'

import WrappedImage from 'main_app/components/WrappedImage'
import Form from 'main_app/components/Form'
import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'

import { INITIAL_LANDING_FORM_PROCESSOR_URL } from 'main_app/constants'

import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import * as classes from './styles.module.scss'

const initialValues = {
  email: '',
  details: ''
}

const schemaShape = {
  email: Yup.string().email().required(),
  details: Yup.string().required()
}

export default function ScheduleFormBasic ({
  onSubmit,
  className,
  formOrigin
}) {
  const schema = Yup.object(schemaShape).required()
  const InputWithError = useFieldWithErrorClassName('input', classes.fieldWithError)
  const TextAreaWithError = useFieldWithErrorClassName(Textarea, classes.fieldWithError)

  const handleFormSubmit = useCallback(async (values) => {
    try {
      await window.fetch(INITIAL_LANDING_FORM_PROCESSOR_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: values.email,
          message: values.details,
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
    <Form
      className={classNames(classes.scheduleFormBasic, className)}
      onSubmit={handleFormSubmit}
      validationSchema={schema}
      initialValues={initialValues}
    >
      <WrappedImage src={AvatarTeamwork} className={classes.avatarTeamWork} alt='team_work_illustration' height='100' width='100' />
      <h2 className={classes.scheduleTitle}>We’d love hear from you!</h2>

      <label className={classes.labels}>
        <span>Your work email</span>
        <Field
          as={InputWithError}
          type='email'
          name='email'
          autoFocus
          className={classes.scheduleFormBasicInput}
        />
      </label>
      <label className={classes.scheduleFormBasicTextAreaLabel}>
        <span>What can we do for you?</span>
        <Field
          as={TextAreaWithError}
          type='text'
          name='details'
          className={classNames(classes.scheduleFormBasicInput, classes.scheduleFormBasicTextArea)}
        />
      </label>
      <div className={classes.submitWrapper}>
        <SubmitButton
          variant='primary'
          className={classes.scheduleFormBasicButton}
        >
          Get in touch
        </SubmitButton>
        <div className={classes.whatHappensNextContainer}>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement='right'
            overlay={
              <Popover id='what-happens-next-popover' style={{ zIndex: 10 }}>
                <div className={classes.popoverContainer}>
                  <Popover.Title>
                    WHAT HAPPENS NEXT?
                  </Popover.Title>
                  <Popover.Content>
                    Our solution experts will answer your questions in a secure online meeting. You will get good information and honest advice in plain English. You are then free to choose how to move forward
                  </Popover.Content>
                </div>
              </Popover>
                  }
          >
            <div tabIndex='0' className={classes.whatHappensNext}>
              <WrappedImage className={classes.icon} src={InfoIconFilled} alt='' />
            </div>
          </OverlayTrigger>
        </div>
      </div>
    </Form>
  )
}
