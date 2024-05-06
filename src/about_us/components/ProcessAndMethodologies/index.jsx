import useProcessSteps from './ProcessSteps/process_steps'

import stepDecoration from 'assets/about_us/areas_of_expertise/step-decoration.svg'

import WrappedImage from 'main_app/components/WrappedImage'
import classes from './styles.module.scss'

export default function ProcessAndMethodologies () {
  const { steps } = useProcessSteps()

  return (
    <section className={classes.section}>
      <div className={classes.textSection}>
        <p className={classes.introTitle}>Our Process</p>
        <h2 className={classes.title}>Our Process + Methodologies</h2>
        <div className={classes.body}>
          <p className={classes.normalText}>
            At WeDevelop, we work only with top-notch talent.
            <span className={classes.boldText}>
              &nbsp;We connect you with the best professionals across Latin America
            </span>
            &nbsp;through an effective three-step process to ensure you get
            the right hire for your requirements. Thanks to our streamlined hiring
            process, 75% of our clients hire the first match we make!
          </p>
          <br />
          <p className={classes.normalText}>
            Thanks to our streamlined hiring process,
            <span className={classes.boldText}>
              &nbsp;75% of our clients hire the first match we make!
            </span>
          </p>
        </div>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.stepsContainer}>
        {steps.map(({ description }, index) => (
          <div key={index} className={classes.step}>
            <WrappedImage src={stepDecoration} alt='decorative image' className={classes.stepDecoration} />
            <span className={classes.number}>{index + 1}</span>
            {description}
          </div>
        ))}
      </div>
    </section>
  )
}
