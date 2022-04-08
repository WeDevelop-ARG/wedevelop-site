import InternalLink from 'main_app/components/InternalLink'
import Button from 'main_app/components/Button'
import WrappedImage from 'main_app/components/WrappedImage'

import SmilingFace from 'assets/home/smiling_face.svg'
import CuriousHead from 'assets/home/curious_head.svg'
import DreamTeam from 'assets/home/dream_team.svg'
import BottomImg from 'assets/home/about_us_background_img.png'

import classes from './styles.module.scss'

function AboutUs () {
  return (
    <>
      <section id='about-us' className={classes.aboutUs}>
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>About Us</p>
          <h2 className={classes.titleText}>Our Culture</h2>
          <p className={classes.descriptionText}>
            We're more than just a tech company
          </p>
          <hr className={classes.horizontalBar} />
        </div>
        <div className={classes.sectionContent}>
          <div className={classes.aboutUsBullet}>
            <WrappedImage src={SmilingFace} alt='' className={classes.bulletImg} />
            <p>
              <b>We love what we do</b> - Our unshakeable passion
              helps us live our dreams through hard work.
            </p>
          </div>
          <div className={classes.aboutUsBullet}>
            <WrappedImage src={CuriousHead} alt='' className={classes.bulletImg} />
            <p>
              <b>We are curious</b> - In an ever-evolving world,
              we stay on the cutting edge. And we love it!
            </p>
          </div>
          <div className={classes.aboutUsBullet}>
            <WrappedImage src={DreamTeam} alt='' className={classes.bulletImg} />
            <p>
              <b>We are always collaborating</b> - Our dream team has fun
              and learns from each other. Everyone is a key player.
            </p>
          </div>
        </div>
        <Button
          as={InternalLink}
          href='/contact'
          isAnchor
          variant='primary'
          className={classes.moreInfoButton}
          link={{ scroll: false }}
        >
          Get In Touch
        </Button>
        <div className={classes.filledCircle} aria-hidden='true' />
        <div className={classes.emptyCircle} aria-hidden='true' />
        <div className={classes.smallCircle} aria-hidden='true' />
        <div className={classes.smallBlurCircle} aria-hidden='true' />
      </section>
      <WrappedImage
        src={BottomImg}
        alt=''
        layout='fill'
        className={classes.bottomImg}
      />
    </>
  )
}

export default AboutUs
