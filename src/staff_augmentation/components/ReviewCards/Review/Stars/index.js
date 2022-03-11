import times from 'lodash/times'

import StarIcon from 'assets/staff_augmentation/star.svg'

import classes from './styles.module.scss'
import WrappedImage from 'main_app/components/WrappedImage'

function Stars ({ starsNumber }) {
  return (
    <div className={classes.starIcons}>
      {times(starsNumber).map((_, index) => (
        <WrappedImage
          key={index}
          layout='fixed'
          src={StarIcon}
          className={classes.star}
        />
      ))}
    </div>
  )
}

export default Stars
