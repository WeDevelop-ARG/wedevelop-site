import Button from 'main_app/components/Button'
import classNames from 'classnames'

import Background from 'assets/staff_augmentation/latam_background.component.svg'
import BackgroundMobile from 'assets/staff_augmentation/latam_background_mobile.component.svg'
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
      <Background viewBox='0 0 1680 664' preserveAspectRatio='xMidYMid slice' className={classes.background} />
      <BackgroundMobile viewBox='0 0 375 1012' preserveAspectRatio='xMidYMid slice' className={classNames(classes.background, classes.mobile)} />
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
