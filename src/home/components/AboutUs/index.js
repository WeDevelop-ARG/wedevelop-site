import Link from 'next/link'

import Button from 'main_app/components/Button'
import Image from 'next/image'

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
            <Image src={SmilingFace} alt='' className={classes.bulletImg} />
            <p>
              <b>We love what we do</b> - Our indomitable spirit makes
              us live our dreams by doing what we love.
            </p>
          </div>
          <div className={classes.aboutUsBullet}>
            <Image src={CuriousHead} alt='' className={classes.bulletImg} />
            <p>
              <b>We are curious</b> - On an exponential growing world,
              we stay on the edge. And we love it!
            </p>
          </div>
          <div className={classes.aboutUsBullet}>
            <Image src={DreamTeam} alt='' className={classes.bulletImg} />
            <p>
              <b>We work as a Dream Team</b> - We have fun and learn
              from each other. Everyone is a key player.
            </p>
          </div>
        </div>
        <Button
          as={Link}
          href='/contact'
          smooth
          isAnchor
          variant='primary'
          className={classes.moreInfoButton}
        >
          More Info
        </Button>
        <div className={classes.filledCircle} aria-hidden='true' />
        <div className={classes.emptyCircle} aria-hidden='true' />
        <div className={classes.smallCircle} aria-hidden='true' />
        <div className={classes.smallBlurCircle} aria-hidden='true' />
      </section>
      <Image src={BottomImg} alt='' className={classes.bottomImg} />
    </>
  )
}

export default AboutUs
