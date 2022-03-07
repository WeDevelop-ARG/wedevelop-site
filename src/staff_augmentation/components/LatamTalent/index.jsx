import Button from 'main_app/components/Button'

import LatamMap from 'assets/staff_augmentation/latam_map.svg'

import classes from './styles.module.scss'

export default function LatamTalent ({
  subtitle,
  title,
  text,
  onCTAClick,
  ctaText
}) {
  return (
    <section id='latam-talent-section' className={classes.sectionContainer}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>{subtitle}</p>
        <h2 className={classes.titleText}>{title}</h2>
        <p className={classes.descriptionText}>{text}</p>
        <hr className={classes.horizontalBar} />
        <Button
          variant='primary'
          onClick={onCTAClick}
          className={classes.ctaButton}
        >
          {ctaText}
        </Button>
      </div>
      <div className={classes.mobileGradient} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={classes.map} src={LatamMap.src} alt='' />
      <div className={classes.mobileCTAContainer}>
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
