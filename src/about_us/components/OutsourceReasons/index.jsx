import WrappedImage from 'main_app/components/WrappedImage'

import decoElements from 'assets/about_us/nearshore_outsourcing/deco-elements-2.svg'
import dotsPattern from 'assets/about_us/dots_pattern.svg'
import menCodingBackground from 'assets/about_us/nearshore_outsourcing/men-coding-background.png'

import classes from './styles.module.scss'

export default function OutsourceReasons () {
  return (
    <>
      <section className={classes.section}>
        <div className={classes.outsourcingReasons}>
          <div className={classes.header}>
            <p className={classes.title}>Reasons To Outsource Tech Talent Nearshore</p>
            <p className={classes.subtitle}>
              Nearshore and offshore outsourcing, which is the best choice for your business?
              When it comes to cost efficiency, both are great options
            </p>
          </div>
          <hr className={classes.horizontalBar} />
          <div className={classes.textContainer}>
            <p>
              However, don't be dazzled by the economic advantages of offshoring.
              <span className={classes.boldText}>
                The smartest choice comes from analyzing the core aspects of both IT talent sourcing methodologies.
              </span>
            </p>
            <p>
              If you only focus on saving money, you may end up paying a high price when the results arrive.
            </p>
            <p>
              Therefore, before embarking on the daunting task of hiring tech professionals for your next
              project or getting on board a permanent hire,
              <span className={classes.boldText}>
                get the whole picture.
              </span>
              As we mentioned, cutting
              costs is one of the main reasons companies outsource IT project developments.
            </p>
            <p className={classes.violetGradientText}>
              And offshore presents lower prices than nearshore.
            </p>
          </div>
        </div>
        <WrappedImage src={dotsPattern} alt='' layout='intrinsic' className={classes.dotsPattern} aria-hidden='true' />
        <WrappedImage src={decoElements} alt='' layout='intrinsic' className={classes.decoElements} aria-hidden='true' />
      </section>
      <WrappedImage src={menCodingBackground} alt='' layout='responsive' className={classes.backgroundImg} />
    </>
  )
}
