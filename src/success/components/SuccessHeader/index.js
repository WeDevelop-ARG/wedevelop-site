import { useState, useCallback } from 'react'

import Button from 'main_app/components/Button'
import ScheduleCallModal from 'staff_augmentation/components/ScheduleCallModal'
import WrappedImage from 'main_app/components/WrappedImage'

import HeaderBackground from 'assets/staff_augmentation/backgrounds/blue_gradient_background.svg'
import DotsPattern from 'assets/staff_augmentation/white_dots_pattern.svg'
import DecorationElements from 'assets/staff_augmentation/deco_elements.svg'
import BlurredDecorationElements from 'assets/staff_augmentation/blurred_deco_elements.svg'
import ThumbsUpIcon from 'assets/success/thumbs_up.svg'

import classes from './styles.module.scss'

export default function SuccessHeader ({ displayScheduleCallHint = false }) {
  const [isCallModalOpen, setCallModalOpen] = useState(false)

  const onSuccess = useCallback(() => {
    setCallModalOpen(false)
  }, [])

  return (
    <section id='headerSection' className={classes.headerContainer}>
      <div className={classes.backgroundContainer}>
        <WrappedImage layout='fill' objectFit='cover' objectPosition='bottom' src={HeaderBackground} alt='' className={classes.background} />
      </div>
      <ScheduleCallModal
        isModalOpen={isCallModalOpen}
        setModalOpen={setCallModalOpen}
        onSubmit={onSuccess}
      />
      <WrappedImage src={DotsPattern} alt='' className={classes.dotsPattern} />
      <WrappedImage src={DecorationElements} alt='' className={classes.decorationElementsPattern} />
      <WrappedImage src={BlurredDecorationElements} alt='' className={classes.blurredDecorationElements} />
      <div className={classes.successMessageContainer}>
        <WrappedImage src={ThumbsUpIcon} className={classes.thumbsUpIcon} />
        <h1 className={classes.title}><span className={classes.bold}>Thanks</span> for contacting WeDevelop</h1>
        <p className={classes.paragraph}>
          You will receive a confirmation email shortly with the information you requested. Please be sure to check your spam folder for it!
        </p>
        <div className={classes.separator} />
      </div>
      {displayScheduleCallHint && (
        <div className={classes.meetingWrapper}>
          <div className={classes.meetingContainer}>
            <span className={classes.hurry}>In a hurry?</span>
            <span className={classes.meeting}>
              Please don't hesitate to set a time to meet or talk, or leave your details and we'll get back to you.
            </span>
            <Button className={classes.meetingButton} onClick={() => setCallModalOpen(true)}>Schedule a call</Button>
          </div>
        </div>
      )}
    </section>
  )
}
