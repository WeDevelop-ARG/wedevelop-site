import useValues from '../../hooks/useValues'

import DotsPattern from 'assets/home/dots_pattern.svg'

import classes from './styles.module.scss'

function Values () {
  const values = useValues()

  return (
    <>
      <section id='values' className={classes.values}>
        <div className={classes.sectionContent}>
          <p className={classes.subheadingText}>our team</p>
          <h2 className={classes.titleText}>Values</h2>
          <hr className={classes.horizontalBar} />
          <ul className={classes.valueList}>
            {values.map(({
              id,
              title,
              description
            }) => (
              <li className={classes.valueBox} key={id}>
                <div className={classes.valueContainer}>
                  <h3 className={classes.valueTitle}>{title}</h3>
                  <p className={classes.valueDescription}>{description}</p>
                </div>
              </li>
            ))}
          </ul>
          <img src={DotsPattern} alt='' className={classes.topRightPattern} aria-hidden='true' />
          <img src={DotsPattern} alt='' className={classes.middleLeftPattern} aria-hidden='true' />
          <div className={classes.filledSmallCircle} aria-hidden='true' />
          <div className={classes.emptySmallCircle} aria-hidden='true' />
          <div className={classes.smallBlurLeftCircle} aria-hidden='true' />
          <div className={classes.smallBlurRightCircle} aria-hidden='true' />
          <div className={classes.filledCircle} aria-hidden='true' />
          <div className={classes.emptyCircle} aria-hidden='true' />
          <div className={classes.smallCircle} aria-hidden='true' />
        </div>
      </section>
    </>
  )
}

export default Values
