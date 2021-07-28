import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'
import SVGIcon from 'main_app/components/SVGIcon'

import BottomImg from 'assets/home/about_us_background_img.png'

import classes from './styles.module.scss'

function AboutUs () {
  return (
    <div id='about-us' className={classes.aboutUs}>
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
          <SVGIcon name='home/smiling_face' className={classes.bulletImg} />
          <p>
            <b>We love what we do</b> - Our indomitable spirit makes
            us live our dreams by doing what we love.
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <SVGIcon name='home/curious_head' className={classes.bulletImg} />
          <p>
            <b>We are curious</b> - On an exponential growing world,
            we stay on the edge. And we love it!
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <SVGIcon name='home/dream_team' className={classes.bulletImg} />
          <p>
            <b>We work as a Dream Team</b> - We have fun and learn
            from each other. Everyone is a key player.
          </p>
        </div>
      </div>
      <Button
        as={HashLink}
        to='/contact'
        smooth
        isAnchor
        variant='primary'
        className={classes.moreInfoButton}
      >
        More Info
      </Button>
      <img src={BottomImg} alt='' className={classes.bottomImg} />
    </div>
  )
}

export default AboutUs
