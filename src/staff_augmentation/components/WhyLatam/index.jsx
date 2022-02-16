import Button from 'main_app/components/Button'
import classNames from 'classnames'


import { ReactComponent as Background } from 'assets/staff_augmentation/latam_background.svg'
import { ReactComponent as BackgroundMobile } from 'assets/staff_augmentation/latam_background_mobile.svg'
import BottomSeparator from 'assets/staff_augmentation/latam_bottom_separator.png'
import BackgroundContainer from '../BackgroundContainer'

import classes from './styles.module.scss'

export default function WhyLatam ({
  subtitle,
  title,
  cards,
  onCTAClick,
  ctaText
}) {
  return (
    <>
      <Background preserveAspectRatio='xMidYMid slice' className={classes.background} />
      <BackgroundMobile preserveAspectRatio='xMidYMid slice' className={classNames(classes.background, classes.mobile)} />
      <section id='why-latam-section' className={classes.sectionContainer}>
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>{subtitle}</p>
          <h2 className={classes.titleText}>{title}</h2>
          <hr className={classes.horizontalBar} />
        </div>
        <ul className={classes.cardsContainer}>
          {cards.map(card => (
            <li key={card.title}>
              {card.icon}
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </li>
          ))}
        </ul>
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
      <BackgroundContainer backgroundURL={BottomSeparator} />
    </>
  )
}
