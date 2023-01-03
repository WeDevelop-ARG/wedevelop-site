import Image from 'main_app/components/Image'

import BlueGradient from 'assets/services/blue_gradient_triangular_background.component.svg'
import CodingBanner from 'assets/staff_augmentation/code_banner.png'

import classes from './styles.module.scss'

function EveryStepMatters () {
  return (
    <>
      <section className={classes.everyStepMatters}>
        <div className={classes.container}>
          <div className={classes.image}>
            <Image src={CodingBanner} layout='fill' objectFit='cover' className={classes.codeBanner} alt='decorative code image' />
          </div>
          <div className={classes.mainContainer}>
            <div className={classes.primaryContainer}>
              <span className={classes.header}>Every Step Matters Towards the <b className={classes.purpleText}>Perfect Fit</b></span>
              <div className={classes.contentText}>
                <p>For us, every step of the recruiting process is key to the success of your assignment.</p>
                <p>We work together on your idea and project needs to kick-start the hiring process by diving into our vast talent pool of IT professionals.</p>
              </div>
            </div>
          </div>
          <div className={classes.resultContainer}>
            <div className={classes.primaryContainer}>
              <p className={classes.title}>The Result?</p>
              <p className={classes.subtitle}>You get access to highly-qualified experts faster and at lower costs.</p>
              <div className={classes.contentText}>
                <p>At WeDevelop, we help you onboard the best IT hires in Latin America with proficiency in the latest tools and technologies.</p>
                <p>Avoid the struggle of sourcing, qualifying, and training candidates, and trust the process in our expert hands.</p>
              </div>
            </div>
          </div>
          <div className={classes.howContainer}>
            <div className={classes.primaryContainer}>
              <p className={classes.title}>How?</p>
              <p className={classes.subtitle}>With a team committed to your business success, working with a seamless IT staffing model.</p>
            </div>
          </div>
        </div>
        <BlueGradient className={classes.blueBackground} viewBox='0 0 1680 665' preserveAspectRatio='xMidYMin slice' />
      </section>
    </>
  )
}

export default EveryStepMatters
