import HeaderBackground from 'assets/staff_augmentation/backgrounds/blue_gradient_background.svg'
import Image from 'main_app/components/Image'
import DotsPattern from 'assets/staff_augmentation/white_dots_pattern.svg'
import DecorationElements from 'assets/staff_augmentation/deco_elements.svg'
import BlurredDecorationElements from 'assets/staff_augmentation/blurred_deco_elements.svg'
import ThumbsUpIcon from 'assets/success/thumbs_up.svg'
import classes from './styles.module.scss'
import { useState, useCallback } from 'react'
import ScheduleCallModal from 'staff_augmentation/components/ScheduleCallModal'
import Button from 'main_app/components/Button'

export default function SuccessHeader({ displayScheduleCallHint = false }) {
  const [isCallModalOpen, setCallModalOpen] = useState(false)

  const onSuccess = useCallback(() => {
    setCallModalOpen(false)
  }, [])

  return (
    <>
      <ScheduleCallModal 
        isModalOpen={isCallModalOpen} 
        setModalOpen={setCallModalOpen} 
        onSubmit={onSuccess}
      />
      <Image src={HeaderBackground} alt='' className={classes.background} />
      <section id='headerSection' className={classes.headerContainer}>
        <Image src={DotsPattern} alt='' className={classes.dotsPattern} />
        <Image src={DecorationElements} alt='' className={classes.decorationElementsPattern} />
        <Image src={BlurredDecorationElements} alt='' className={classes.blurredDecorationElements} />
        <div className={classes.successMessageContainer}>
          <Image src={ThumbsUpIcon} className={classes.thumbsUpIcon} />
          <h1 className={classes.title}><span className={classes.bold}>Thanks</span> for contacting WeDevelop</h1>
          <p className={classes.paragraph}>
            You will receive a confirmation email shortly with the information you requested. Please be sure to check your spam folder for it!
          </p>
          <div className={classes.separator} />
        </div>
      </section>
      {displayScheduleCallHint && (
        <div className={classes.meetingWrapper}>
          <div className={classes.meetingContainer}>
            <p className={classes.meeting}>
              <span className={classes.hurry}>In a hurry?</span> Please don't hesitate to set a time to meet or talk, or leave your details and we'll get back to you.
              <Button className={classes.meetingButton} onClick={() => setCallModalOpen(true)}>Schedule a call</Button>
            </p>
          </div>
        </div>
      )}
    </>
  )
}