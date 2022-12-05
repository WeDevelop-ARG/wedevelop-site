import BackgroundContainer from 'staff_augmentation/components/BackgroundContainer'
import InternalLink from 'main_app/components/InternalLink'
import WrappedImage from 'main_app/components/WrappedImage'

import DecoHalfCircle from 'assets/services/every-steps-half-circle-right.component.svg'
import ListBullet from 'assets/services/benefits/bullet.svg'
import NumbersSpeakBackground from 'assets/services/background-numbers-speak.png'

import classes from './styles.module.scss'

export default function NumbersSpeak () {
  return (
    <>
      <section className={classes.numbersSpeak}>
        <DecoHalfCircle className={classes.decoHalfCircle} viewBox='0 0 211 270' preserveAspectRatio='xMidYMid meet' />
        <div className={classes.cardsAndButtons}>
          <div className={classes.card}>
            <WrappedImage alt='List bullet' src={ListBullet} className={classes.bullet} />
            <p>Numbers speak for themselves</p>
          </div>
          <InternalLink
            href='/services/staff-augmentation/#how-it-works'
            className={classes.buttonCard}
          >
            <WrappedImage alt='List bullet' src={ListBullet} className={classes.bullet} />
            <p>Building a remote software development team has never been easier</p>
          </InternalLink>
          <InternalLink
            href='/services/staff-augmentation/#contact-us'
            className={classes.buttonCard}
          >
            <WrappedImage alt='List bullet' src={ListBullet} className={classes.bullet} />
            <p>Onboarding A Top-Notch Team</p>
          </InternalLink>
        </div>
        <div className={classes.content}>
          <h2 className={classes.title}>75% of our clients hire the first match we make!</h2>
          <p className={classes.paragraph}>
            And this is possible only because we love what we do and strive for excellence in everything we do.
          </p>
          <p className={classes.paragraph}>
            Our staff works as a dream team where everyone is crucial player in the hiring journey.
          </p>
        </div>
      </section>
      <BackgroundContainer backgroundURL={NumbersSpeakBackground} />
    </>
  )
}
