import WrappedImage from 'main_app/components/WrappedImage'
import DotsPattern from 'assets/about_us/dots_pattern.svg'

import classes from './styles.module.scss'

export default function KeyToSuccessfulSourcing () {
  return (
    <section className={classes.section}>
      <div className={classes.keyToSuccessfulSourcing}>
        <p className={classes.title}>WeDevelop: The Key To Successful Nearshore Talent Sourcing</p>
        <hr className={classes.horizontalBar} />
        <div className={classes.textContainer}>
          <p>
            At WeDevelop,
            <span className={classes.boldText}>
              we are your trusted source of tech
              professionals in Latin America, offering the most
              competitive hiring conditions for developers and
              tailored solutions to companies.
            </span>
            <br /><br />
            Thanks to this improved outsourcing methodology,
            it's possible to bridge the gap between the most
            qualified candidates and organizations looking to
            optimize their team's performance
            <br /><br />
            So, whether you have a one-time project or need a
            permanent team of developers,
            <span className={classes.boldText}>
              nearshore outsourcing is the go-to option for any smart and
              savvy business owner.
            </span>
            Get to know how this sourcing methodology works.
          </p>
        </div>
      </div>
      <WrappedImage src={DotsPattern} alt='' layout='intrinsic' className={classes.dotsPattern} aria-hidden='true' />
    </section>
  )
}
