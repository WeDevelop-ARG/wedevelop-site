import { useState, useCallback } from 'react'
import classNames from 'classnames'

import HeaderBackground from 'assets/staff_augmentation/backgrounds/blue_gradient_background.svg'
import WeDevelopCEO from 'assets/staff_augmentation/wedevelop_ceo.png'
import DotsPattern from 'assets/staff_augmentation/white_dots_pattern.svg'
import WeDevelopLogo from 'assets/logo/full_logo_white.svg'
import DecorationElements from 'assets/staff_augmentation/deco_elements.svg'
import BlurredDecorationElements from 'assets/staff_augmentation/blurred_deco_elements.svg'

import useMediaQuery from 'utils/use_media_query'

import Button from 'main_app/components/Button'
import ClutchWidget from 'main_app/components/ClutchWidget'
import Image from 'next/image'

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
  const shouldUseBiggerClutch = useMediaQuery('screen and (min-width: 1550px)')
  const [isClutchLoaded, setIsClutchLoaded] = useState(false)
  const handleClutchLoaded = useCallback(() => {
    setIsClutchLoaded(true)
  }, [])
  const clutch = (
    <div className={classNames(classes.clutchRectangle, { [classes.visuallyHidden]: !isClutchLoaded })}>
      <ClutchWidget
        className={classes.clutchWidget}
        onLoad={handleClutchLoaded}
        verticalAlign='center'
        horizontalAlign='center'
        variant='light'
        height={shouldUseBiggerClutch ? 55 : undefined}
      />
      <div className={classes.filledCircle} />
      <div className={classes.emptyCircle} />
    </div>
  )

  return (
    <>
      <section id='headerSection' className={classes.headerContainer}>
        <div className={classes.backgroundContainer}>
          <Image src={HeaderBackground} alt='' className={classes.background} />
        </div>
        <Image src={DotsPattern} alt='' className={classes.dotsPattern} />
        <Image src={DecorationElements} alt='' className={classes.decorationElementsPattern} />
        <Image src={BlurredDecorationElements} alt='' className={classes.blurredDecorationElements} />
        <div className={classes.columnsContainer}>
          <div className={classes.leftSideContainer}>
            <Image src={WeDevelopLogo} alt='WeDevelop logo' className={classes.imageLogo} />
            <div className={classes.tagNameContainer}>
              <span className={classes.tagName} style={{ backgroundColor }}>
                {landingName}
              </span>
            </div>
            <h1 className={classes.title}>{title}</h1>
            <h2 className={classes.subTitle}>{description}</h2>
            <div className={classes.separator} />
            <div className={classes.hideOnTabletDown}>
              {clutch}
            </div>
          </div>
          <div className={classes.rightSideContainer}>
            <div className={classes.quoteContainer}>
              <div className={classes.avatarContainer}>
                <div className={classes.avatarImageContainer}>
                  <Image src={WeDevelopCEO} objectFit='cover' alt={'A photo of WeDevelop\'s CEO'} className={classes.avatar} />
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
              {clutch}
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
