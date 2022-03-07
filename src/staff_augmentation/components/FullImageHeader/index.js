import { useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

import AbelBookBackground from 'assets/staff_augmentation/abel_book_background.png'
import DotsPattern from 'assets/staff_augmentation/white_dots_pattern.svg'
import InfoIcon from 'assets/staff_augmentation/info_icon.svg'
import ArrowDown from 'assets/staff_augmentation/arrow_downward.svg'
import Circles from 'assets/staff_augmentation/full_image_header_circles.component.svg'
import WeDevelopLogo from 'assets/logo/full_logo_white.svg'

import Button from 'main_app/components/Button'
import ClutchRectangle from 'main_app/components/ClutchRectangle'
import Image from 'main_app/components/Image'
import WrappedImage from 'main_app/components/WrappedImage'

import classes from './styles.module.scss'

export default function FullImageHeader ({
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
          <Image src={AbelBookBackground} layout='fill' objectFit='cover' objectPosition='top right' alt='' />
        </div>
        <Circles className={classes.circles} />
        <WrappedImage src={DotsPattern} alt='' loading='eager' layout='intrinsic' className={classes.dotsPattern} />
        <div className={classes.columnsContainer}>
          <div className={classes.leftSideContainer}>
            <WrappedImage src={WeDevelopLogo} alt='WeDevelop logo' layout='responsive' width='225' height='51' loading='eager' className={classes.imageLogo} />
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.hideOnTabletDown}>
              <h2 className={classes.subTitle}>{description}</h2>
              <ClutchRectangle
                className={classes.desktopClutch}
                isClutchLoaded={isClutchLoaded}
                setIsClutchLoaded={setIsClutchLoaded}
              />
            </div>
          </div>
          <div className={classes.rightSideContainer}>
            <div className={classes.ctaContainer}>
              <div className={classes.ctaButtonContainer}>
                <Button className={classes.scheduleButton} onClick={onScheduleMeetingCTAClick} variant={['primary', 'focus-gradient']}>
                  Schedule a call
                </Button>
              </div>
              <p className={classes.alternativeSchedule}>
                Or, use{' '}
                <Button variant={['link', 'focus-scale']} className={classes.scheduleFormButton} onClick={onContactCTAClick}>
                  this form
                </Button>
                {' '}to tell us about your needs.
              </p>
              <div className={classes.whatHappensNextContainer}>
                <OverlayTrigger
                  trigger={['hover', 'focus']}
                  placement='left'
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
                    <WrappedImage className={classes.icon} src={InfoIcon} alt='' /> WHAT HAPPENS NEXT?
                  </div>
                </OverlayTrigger>
              </div>
            </div>
            <div className={classes.hideOnDesktopUp}>
              <div className={classes.separator} />
              <ClutchRectangle
                isClutchLoaded={isClutchLoaded}
                setIsClutchLoaded={setIsClutchLoaded}
              />
              <WrappedImage src={ArrowDown} alt='Page continues below' className={classes.arrowDown} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
