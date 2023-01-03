import WrappedImage from 'main_app/components/WrappedImage'

import SmilingFace from 'assets/home/smiling_face.svg'
import CuriousHead from 'assets/home/curious_head.svg'
import DreamTeam from 'assets/home/dream_team.svg'
import Workplace from 'assets/home/workplace.svg'
import Excellence from 'assets/home/excellence.svg'
import AlwaysBeLearning from 'assets/home/always_be_learning.svg'

import GradientBackground from 'assets/career/our_culture/gradient-background.component.svg'

import classes from './styles.module.scss'

function OurCulture () {
  return (
    <section id='our-culture' className={classes.aboutUs}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>Our Culture</p>
        <h2 className={classes.titleText}>Our Mindset</h2>
        <p className={classes.descriptionText}>
          Our core values fuel our mission and support our vision, acting as a beacon of light for our everyday actions.
          <br />
          You will find that our actions are reflected throughout all our company levels, driving every decision we make.
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
            <b>We are curious</b> - In an exponentially growing world,
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
          <WrappedImage layout='intrinsic' src={Workplace} alt='' className={classes.bulletImg} />
          <p>
            <b>We create an equitable workplace</b> - Every single individual
            has the specific support they need to succeed and grow.
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <WrappedImage layout='intrinsic' src={Excellence} alt='' className={classes.bulletImg} />
          <p>
            <b>We seek excellence</b> - We are relentless people. We have
            plucked conformity from our DNA.
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <WrappedImage layout='intrinsic' src={AlwaysBeLearning} alt='' className={classes.bulletImg} />
          <p>
            <b>We learn from mistakes</b> - We keep an Always-Be-Learning mindset.
            Mistakes exist only as opportunities to learn and grow.
          </p>
        </div>
      </div>
      <GradientBackground className={classes.background} viewBox='0 0 1680 848' preserveAspectRatio='xMidYMid slice' />
    </section>
  )
}

export default OurCulture
