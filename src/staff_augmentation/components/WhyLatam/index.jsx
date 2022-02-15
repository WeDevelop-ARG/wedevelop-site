import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

import { ReactComponent as TimeZoneIcon } from 'assets/staff_augmentation/timezone_globe.svg'
import { ReactComponent as CulturalClosenessIcon } from 'assets/staff_augmentation/cultural_closeness.svg'
import { ReactComponent as LevelOfEnglishIcon } from 'assets/staff_augmentation/language.svg'
import { ReactComponent as PriceQualityIcon } from 'assets/staff_augmentation/price_quality.svg'

export default function WhyLatam ({
  subtitle = 'great reasons',
  title = 'Why LATAM?',
  cards = [{
    icon: <TimeZoneIcon />,
    title: 'Time Zone Aligned',
    text: 'As our engineers are in LATAM in which only has 3 or 4 (+-) hours difference you are going to be working in real-time with your team. Being able to consult them and solve any issue straightaway.'
  }, {
    icon: <CulturalClosenessIcon />,
    title: 'Cultural Closeness',
    text: 'As we already know our cultures have a lot in common. We share the values of working as a team in a collaborative way, taking responsibilities, fulfilling schedules, and accomplishing a common goal.'
  }, {
    icon: <LevelOfEnglishIcon />,
    title: 'Level of English',
    text: 'In LATAM the level of english we present is above the average, and besides that we take care of ensuring you that every developer has a high level of English so you can be able to speak with them as you were speaking with an english native.'
  }, {
    icon: <PriceQualityIcon />,
    title: 'Best Price & Quality',
    text: 'You will find the best relation between price and quality. We only hire the top 1% talented developers to ensure you the best quality, and besides that our prices are almost half cheapest the cost of a US-based equivalent.'
  }],
  onCTAClick,
  ctaText = 'Get a Free Quote'
}) {
  return (
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
  )
}
