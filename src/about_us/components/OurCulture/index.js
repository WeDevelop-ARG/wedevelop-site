import Image from 'next/image'
import WrappedImage from 'main_app/components/WrappedImage'

import SmilingFace from 'assets/home/smiling_face.svg'
import CuriousHead from 'assets/home/curious_head.svg'
import DreamTeam from 'assets/home/dream_team.svg'
import workplace from 'assets/home/workplace.svg'
import excellence from 'assets/home/excellence.svg'
import alwaysBeLearning from 'assets/home/always_be_learning.svg'
import DotsPattern from 'assets/about_us/dots_pattern.svg'
import HalfCircle from 'assets/home/services/half_circle.svg'

import classes from './styles.module.scss'

function OurCulture () {
  return (
    <section id='our-culture' className={classes.aboutUs}>
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
          <WrappedImage layout='intrinsic' src={SmilingFace} alt='' className={classes.bulletImg} />
          <p>
            <b>We love what we do</b> - Our indomitable spirit makes
            us live our dreams by doing what we love.
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <WrappedImage layout='intrinsic' src={CuriousHead} alt='' className={classes.bulletImg} />
          <p>
            <b>We are curious</b> - On an exponential growing world,
            we stay on the edge. And we love it!
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <WrappedImage layout='intrinsic' src={DreamTeam} alt='' className={classes.bulletImg} />
          <p>
            <b>We work as a Dream Team</b> - We have fun and learn
            from each other. Everyone is a key player.
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <WrappedImage layout='intrinsic' src={workplace} alt='' className={classes.bulletImg} />
          <p>
            <b>We create an equitable workplace</b> - Every single individual
            has the specific support they need to succeed and grow.
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <WrappedImage layout='intrinsic' src={excellence} alt='' className={classes.bulletImg} />
          <p>
            <b>We seek excellence</b> - We're relentless people. We have
            plucked conformity from our DNA.
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <WrappedImage layout='intrinsic' src={alwaysBeLearning} alt='' className={classes.bulletImg} />
          <p>
            <b>We learn from mistakes</b> - We keep an Always-Be-Learning mindset.
            Mistakes exist only as opportunities to learn and grow.
          </p>
        </div>
      </div>
      <div className={classes.filledCircle} aria-hidden='true' />
      <div className={classes.emptyCircle} aria-hidden='true' />
      <div className={classes.smallCircle} aria-hidden='true' />
      <WrappedImage src={HalfCircle} alt='' className={classes.halfCircle} />
      <div className={classes.leftFilledCircle} />
      <div className={classes.leftEmptyCircle} />
      <div className={classes.leftSmallCircle} />
      <WrappedImage layout='intrinsic' src={DotsPattern} alt='' className={classes.dotsPattern} />
    </section>
  )
}

export default OurCulture
