import useValues from '../../hooks/useValues'

import BackgroundContainer from 'staff_augmentation/components/BackgroundContainer'
import WrappedImage from 'main_app/components/WrappedImage'

import DecoCircle from 'assets/career/our_culture/deco-circle.svg'
import DotsPattern from 'assets/home/dots_pattern.svg'
import WorkCoffee from 'assets/about_us/testimonials/work_cofee.png'

import classes from './styles.module.scss'

function Values () {
  const { values } = useValues()

  return (
    <>
      <section id='values' className={classes.values}>
        <div className={classes.sectionContent}>
          <p className={classes.headingText}>Great Reasons</p>
          <h2 className={classes.titleText}>Our Values</h2>
          <hr className={classes.horizontalBar} />
          <ul className={classes.valueList}>
            {values.map(({
              id,
              icon,
              title,
              description
            }) => (
              <li className={classes.valueBox} key={id}>
                <WrappedImage src={icon} className={classes.valueIcon} />
                <h3 className={classes.valueTitle}>{title}</h3>
                <p className={classes.valueDescription}>{description}</p>
              </li>
            ))}
          </ul>
          <WrappedImage layout='intrinsic' src={DotsPattern} alt='' className={classes.topLeftPattern} aria-hidden='true' />
          <WrappedImage layout='intrinsic' src={DecoCircle} alt='' className={classes.decoCircle} aria-hidden='true' />
        </div>
      </section>
      <BackgroundContainer backgroundURL={WorkCoffee} />
    </>
  )
}

export default Values
