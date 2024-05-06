import WrappedImage from 'main_app/components/WrappedImage'

import GradientBackground from 'assets/about_us/gradient-background.component.svg'
import highValues from 'assets/about_us/high_values.svg'

import classes from './styles.module.scss'

export default function WeDevelopCulture () {
  return (
    <section className={classes.section}>
      <div className={classes.textContent}>
        <h2 className={classes.title}>The WeDevelop Culture</h2>
        <hr className={classes.horizontalBar} />
        <p className={classes.body}>
          Working at WeDevelop is a fulfilling experience. We foster
          collaboration among peers and respect everyone’s opinion,
          creating an inviting and creative work environment.
          <span className={classes.boldText}>
            &nbsp;As team members feel appreciated and valued, WeDevelop is
            the company everyone wants to work with.
          </span>
          &nbsp;We are always one step ahead of the game, ready to drive
          change in the right direction and lead companies to
          their next big step in their digital journeys.
        </p>
      </div>
      <WrappedImage src={highValues} alt='high values decorative image' layout='intrinsic' />
      <GradientBackground className={classes.background} viewBox='0 0 1680 729' preserveAspectRatio='xMidYMin slice' />
    </section>
  )
}
