import { useCallback } from 'react'
import { useRouter } from 'next/router'

import AbelBookBackground from 'assets/staff_augmentation/abel_book_background.png'
import DotsPattern from 'assets/staff_augmentation/white_dots_pattern.svg'
import Circles from 'assets/staff_augmentation/full_image_header_circles.component.svg'
import WeDevelopLogo from 'assets/logo/full_logo_white.svg'

import Image from 'main_app/components/Image'
import WrappedImage from 'main_app/components/WrappedImage'
import Button from 'main_app/components/Button'

import classes from './styles.module.scss'
import ScheduleFormBasic from '../ScheduleFormBasic'

export default function FullImageHeader ({
  title,
  description,
  onScheduleMeetingCTAClick
}) {
  const { push } = useRouter()
  const onSuccess = useCallback(() => {
    const redirectUrl = '/success/confirm'
    push(redirectUrl)
  }, [push])

  return (
    <>
      <section id='headerSection' className={classes.headerContainer}>
        <div className={classes.backgroundContainer}>
          <Image
            src={AbelBookBackground}
            alt=''
            layout='fill'
            loading='eager'
            priority
            decoding='sync'
            placeholder='blur'
            objectFit='cover'
            objectPosition='top right'
          />
        </div>
        <Circles className={classes.circles} />
        <WrappedImage src={DotsPattern} alt='' loading='eager' layout='intrinsic' className={classes.dotsPattern} />
        <div className={classes.columnsContainer}>
          <div className={classes.leftSideContainer}>
            <WrappedImage src={WeDevelopLogo} alt='WeDevelop logo' layout='responsive' width='225' height='51' loading='eager' className={classes.imageLogo} />
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.hideOnTabletDown}>
              <h2 className={classes.subTitle}>{description}</h2>
              <div className={classes.formWrapper}>
                <ScheduleFormBasic onSubmit={onSuccess} />
                <p className={classes.alternativeSchedule}>
                  Or, use{' '}
                  <Button variant={['link', 'focus-scale']} className={classes.scheduleFormButton} onClick={onScheduleMeetingCTAClick}>
                    this link
                  </Button>
                  {' '}to schedule a call with us.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.rightSideContainer}>
            <WrappedImage src={DotsPattern} alt='' loading='eager' layout='intrinsic' className={classes.dotsPatternRight} />
            <p className={classes.imageSubject}>Abel Osorio<br /> Chief Executive Officer</p>
          </div>
        </div>
      </section>
    </>
  )
}
