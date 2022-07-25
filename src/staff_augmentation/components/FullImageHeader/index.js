import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Background from 'assets/staff_augmentation/header_laptop_background.png'
import DotsPattern from 'assets/staff_augmentation/white_dots_pattern.svg'
import WeDevelopLogo from 'assets/logo/full_logo_white.svg'

import Image from 'main_app/components/Image'
import WrappedImage from 'main_app/components/WrappedImage'
import Button from 'main_app/components/Button'

import ScheduleFormBasic from '../ScheduleFormBasic'
import useMediaQuery from 'utils/use_media_query'
import { forPhoneOnly } from 'styles/media_queries'

import classes from './styles.module.scss'

export default function FullImageHeader ({
  title,
  description,
  onScheduleMeetingCTAClick,
  formOrigin
}) {
  const { push } = useRouter()
  const isPhone = useMediaQuery(forPhoneOnly)
  const onSuccess = useCallback(() => {
    const redirectUrl = '/success/confirm'
    push(redirectUrl)
  }, [push])

  return (
    <>
      <section id='headerSection' className={classes.headerContainer}>
        <div className={classes.backgroundContainer}>
          <Image
            src={Background}
            alt=''
            layout='fill'
            loading='eager'
            priority
            decoding='sync'
            placeholder='blur'
            objectFit='cover'
            objectPosition='bottom center'
          />
        </div>
        <WrappedImage
          src={WeDevelopLogo}
          alt='WeDevelop logo'
          layout={isPhone ? 'fixed' : 'responsive'}
          width='225'
          height='51'
          loading='eager'
          className={classes.imageLogo}
        />
        <div className={classes.columnsContainer}>
          <div className={classes.leftSideContainer}>
            <h1 className={classes.title}>{title}</h1>
            <h2 className={classes.subTitle}>{description}</h2>
            <hr className={classes.separator} />
            <WrappedImage
              src={DotsPattern}
              alt=''
              loading='eager'
              layout='intrinsic'
              className={classes.dotsPattern}
            />
          </div>
          <div className={classes.rightSideContainer}>
            <div className={classes.formWrapper}>
              <ScheduleFormBasic onSubmit={onSuccess} formOrigin={formOrigin} />
              <p className={classes.imageSubject}>
                <b>Abel Osorio /</b> Chief Executive Officer
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
