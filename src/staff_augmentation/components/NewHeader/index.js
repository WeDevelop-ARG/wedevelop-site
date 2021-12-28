import ClutchWidget from 'main_app/components/ClutchWidget'
import HeaderBackground from 'assets/staff_augmentation/backgrounds/blue_gradient_background.svg'
import Image from 'main_app/components/Image'
import WeDevelopCEO from 'assets/staff_augmentation/wedevelop_ceo.png'
import WeDevelopLogo from 'assets/logo/full_logo_white.svg'
import DotsPattern from 'assets/staff_augmentation/white_dots_pattern.svg'
import DecorationElements from 'assets/staff_augmentation/deco_elements.svg'
import BlurredDecorationElements from 'assets/staff_augmentation/blurred_deco_elements.svg'
import classes from './styles.module.scss'
import Button from 'main_app/components/Button'

export default function NewHeader({ landingName, backgroundColor, title, description }) {
  return (
    <>
      <Image src={HeaderBackground} alt='' className={classes.background} />
      <section id='headerSection' className={classes.headerContainer}>
        <Image src={DotsPattern} alt='' className={classes.dotsPattern} />
        <Image src={DecorationElements} alt='' className={classes.decorationElementsPattern} />
        <Image src={BlurredDecorationElements} alt='' className={classes.blurredDecorationElements} />
        <div>
          <Image src={WeDevelopLogo} className={classes.imageLogo} />
          <div className={classes.tagNameContainer}>
            <span className={classes.tagName} style={{ backgroundColor }}>
              {landingName}
            </span>
          </div>
          <h1 className={classes.title}>{title}</h1>
          <h2 className={classes.subTitle}>{description}</h2>
          <div className={classes.separator} />
          <div className={classes.clutchRectangle}>
            <ClutchWidget className={classes.clutchWidget} variant='light' />
            <div className={classes.filledCircle} />
            <div className={classes.emptyCircle} />
          </div>
        </div>
        <div className={classes.rightSideContainer}>
          <div className={classes.quoteContainer}>
            <div className={classes.avatarContainer}>
              <Image src={WeDevelopCEO} className={classes.avatar} />
            </div>
            <q className={classes.quote}> 
              {/* TODO: Add to prop */}
              Are you interested to learn 
              more about our Staff Augmentation Services? 
            </q>
          </div>
          <Button className={classes.scheduleButton}>
            Schedule a call
          </Button>
          <p className={classes.alternativeSchedule}>
            Or, use <Button variant="link" className={classes.scheduleFormButton}>this form</Button> to tell us about your needs.
          </p>
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