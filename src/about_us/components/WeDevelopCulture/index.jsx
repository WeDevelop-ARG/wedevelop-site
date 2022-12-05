import Image from 'main_app/components/Image'

import highValues from 'assets/about_us/high_values.svg'

import classes from './styles.module.scss'

export default function WeDevelopCulture () {
  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <Image src={highValues} alt='high values decorative image' width='400px' />
        <div className={classes.textContent}>
          <h2 className={classes.title}>The WeDevelop Culture</h2>
          <p className={classes.body}>
            Working at WeDevelop is a fulfilling experience. We foster
            collaboration among peers and respect everyone’s opinion,
            creating an inviting and creative work environment.
            <span className={classes.boldText}>
              &nbsp;As team members feel appreciated and valued, WeDevelop is
              the company everyone wants to work with. &nbsp;
            </span>
            We are always one step ahead of the game, ready to drive
            change in the right direction and lead companies to
            their next big step in their digital journeys.
          </p>
          <hr className={classes.horizontalBar} />
        </div>
      </div>
      <div className={classes.background} />
    </section>
  )
}
