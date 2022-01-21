import { useState } from 'react'
import Image from 'next/image'

import HeaderBackground from 'assets/staff_augmentation/backgrounds/blue_gradient_background.component.svg'
import WeDevelopCEO from 'assets/staff_augmentation/wedevelop_ceo.png'
import DotsPattern from 'assets/staff_augmentation/white_dots_pattern.svg'
import WeDevelopLogo from 'assets/logo/full_logo_white.svg'
import DecorationElements from 'assets/staff_augmentation/deco_elements.svg'
import BlurredDecorationElements from 'assets/staff_augmentation/blurred_deco_elements.svg'

import WrappedImage from 'main_app/components/WrappedImage'

import Button from 'main_app/components/Button'
import ClutchRectangle from 'main_app/components/ClutchRectangle'

import classes from './styles.module.scss'

export default function NewHeader ({
  freeQuoteForm,
  landingName,
  backgroundColor,
  title,
  description,
  onScheduleMeetingCTAClick,
  onContactCTAClick,
  quote = ''
}) {
  const [isClutchLoaded, setIsClutchLoaded] = useState(false)
  return (
    <>
      <section id='headerSection' className={classes.headerContainer}>
        <div className={classes.backgroundContainer}>
          <HeaderBackground preserveAspectRatio='xMidYMax slice' viewBox='0 0 1680 950' className={classes.background} />
        </div>
        <WrappedImage layout='fixed' src={DotsPattern} alt='' loading='eager' className={classes.dotsPattern} />
        <WrappedImage layout='fixed' src={DecorationElements} alt='' loading='eager' className={classes.decorationElementsPattern} />
        <WrappedImage layout='fixed' src={BlurredDecorationElements} alt='' loading='eager' className={classes.blurredDecorationElements} />
        <div className={classes.columnsContainer}>
          <div className={classes.leftSideContainer}>
            <WrappedImage layout='responsive' src={WeDevelopLogo} alt='WeDevelop logo' loading='eager' className={classes.imageLogo} />
            <div className={classes.tagNameContainer}>
              <span className={classes.tagName} style={{ backgroundColor }}>
                {landingName}
              </span>
            </div>
            <h1 className={classes.title}>{title}</h1>
            <h2 className={classes.subTitle}>{description}</h2>
            <div className={classes.separator} />
            <div className={classes.hideOnTabletDown}>
              <ClutchRectangle
                isClutchLoaded={isClutchLoaded}
                setIsClutchLoaded={setIsClutchLoaded}
              />
            </div>
          </div>
          <div className={classes.rightSideContainer}>
            <div className={classes.quoteContainer}>
              <div className={classes.avatarContainer}>
                <div className={classes.avatarImageContainer}>
                  <Image src={WeDevelopCEO} layout='fill' loading='eager' objectFit='cover' alt={'A photo of WeDevelop\'s CEO'} />
                </div>
              </div>
              <q className={classes.quote}>
                {quote}
              </q>
            </div>
            <div className={classes.shapeTriangle} />
            <Button className={classes.scheduleButton} onClick={onScheduleMeetingCTAClick} variant={['primary', 'focus-scale']}>
              Schedule a call
            </Button>
            <p className={classes.alternativeSchedule}>
              Or, use{' '}
              <Button variant={['link', 'focus-scale']} className={classes.scheduleFormButton} onClick={onContactCTAClick}>
                this form
              </Button>
              {' '}to tell us about your needs.
            </p>
            <div className={classes.hideOnDesktopUp}>
              <ClutchRectangle
                isClutchLoaded={isClutchLoaded}
                setIsClutchLoaded={setIsClutchLoaded}
              />
            </div>
          </div>
        </div>
        <div className={classes.meetingWrapper}>
          <div className={classes.meetingContainer}>
            <h3 className={classes.meetingTitle}>What happens next?</h3>
            <p className={classes.meeting}>
              Our solution experts will answer your questions in a secure online meeting.
              You will get good information and honest advice in plain English. You are
              then free to choose how to move forward.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
