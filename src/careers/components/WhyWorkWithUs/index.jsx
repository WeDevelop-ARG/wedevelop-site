import useBenefits from 'careers/hooks/useBenefits'
import Button from 'main_app/components/Button'
import InternalLink from 'main_app/components/InternalLink'
import Detail from 'main_app/components/Detail'
import classes from './styles.module.scss'

export default function WhyWorkWithUs () {
  const { benefits } = useBenefits()

  return (
    <section className={classes.section}>
      <div className={classes.header}>
        <h2 className={classes.title}>Why Work With Us?</h2>
        <p className={classes.subtitle}>
          At WeDevelop, we go the extra mile to create
          the perfect work environment and long-lasting
          relationships based on our commitment to
          work-life balance. When you join us, you get
          instant access to a supportive community and
          benefits that will skyrocket your career.
        </p>
        <hr className={classes.horizontalBar} />
        <div className={classes.workWithUs}>
          <p className={classes.workWithUsHeader}>Are you ready to take your career to the next level with WeDevelop?</p>
          <Button
            as={InternalLink}
            href='/careers/job-openings'
            variant='primary'
            className={classes.workWithUsButton}
          >
            Work With Us
          </Button>
        </div>
      </div>
      <div className={classes.benefits}>
        <span className={classes.introBenefits}>Explore how working with us can help you shift your future!</span>
        {benefits.map(({ description }, index) => (
          <Detail key={index} name={description} />
        ))}
      </div>
    </section>
  )
}
