import _ from 'lodash'

import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function Stars ({ starsNumber }) {
  return (
    <div className={classes.starIcons}>
      {_.times(starsNumber).map((_, index) => (
        <SVGIcon
          key={index}
          name='staff_augmentation/star'
          className={classes.star}
        />
      ))}
    </div>
  )
}

export default Stars
