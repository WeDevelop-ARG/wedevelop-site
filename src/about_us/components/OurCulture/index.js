import SVGIcon from 'main_app/components/SVGIcon'

import SmilingFace from 'assets/home/smiling_face.svg'
import CuriousHead from 'assets/home/curious_head.svg'
import DreamTeam from 'assets/home/dream_team.svg'
import puzzles from 'assets/home/puzzles.png'
import workplace from 'assets/home/workplace.svg'
import excellence from 'assets/home/excellence.svg'
import alwaysBeLearning from 'assets/home/always_be_learning.svg'

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
          <img src={SmilingFace} alt='' className={classes.bulletImg} />
          <p>
            <b>We love what we do</b> - Our indomitable spirit makes
            us live our dreams by doing what we love.
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <img src={CuriousHead} alt='' className={classes.bulletImg} />
          <p>
            <b>We are curious</b> - On an exponential growing world,
            we stay on the edge. And we love it!
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <img src={DreamTeam} alt='' className={classes.bulletImg} />
          <p>
            <b>We work as a Dream Team</b> - We have fun and learn
            from each other. Everyone is a key player.
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <img src={workplace} alt='' className={classes.bulletImg} />
          <p>
            <b>We create an equitable workplace</b> - Every single individual
            has the specific support they need to succeed and grow.
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <img src={excellence} alt='' className={classes.bulletImg} />
          <p>
            <b>We seek excellence</b> - We're relentless people. We have
            plucked conformity from our DNA.
          </p>
        </div>
        <div className={classes.aboutUsBullet}>
          <img src={alwaysBeLearning} alt='' className={classes.bulletImg} />
          <p>
            <b>We learn from mistakes</b> - We keep an Always-Be-Learning mindset.
            Mistakes exist only as opportunities to learn and grow.
          </p>
        </div>
      </div>
      <img src={puzzles} alt='' className={classes.bottomImg} />
      <div className={classes.filledCircle} aria-hidden='true' />
      <div className={classes.emptyCircle} aria-hidden='true' />
      <div className={classes.smallCircle} aria-hidden='true' />
      <div className={classes.halfCircle}>
        <SVGIcon name='home/services/half_circle' />
      </div>
      <div className={classes.smallBlurCircle} />
      <div className={classes.leftFilledCircle} />
      <div className={classes.leftEmptyCircle} />
      <div className={classes.leftSmallCircle} />
    </section>
  )
}

export default OurCulture
