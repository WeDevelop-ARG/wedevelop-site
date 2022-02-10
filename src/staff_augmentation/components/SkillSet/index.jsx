import Skills from 'home/components/Skills'
import Button from 'main_app/components/Button'
import Accordion from './Accordion'

import classes from './styles.module.scss'

export default function SkillSet ({
  title,
  subtitle,
  onCTAClick,
  ctaText,
  skillSet
}) {
  return (
    <section id='skillset-section' className={classes.sectionContainer}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>{subtitle}</p>
        <h2 className={classes.titleText}>{title}</h2>
        <hr className={classes.horizontalBar} />
      </div>
      <Accordion skillSet={skillSet} />
      <Skills />
      <div className={classes.ctaContainer}>
        <Button
          variant='primary'
          onClick={onCTAClick}
          className={classes.ctaButton}
        >
          {ctaText}
        </Button>
      </div>
    </section>
  )
}
