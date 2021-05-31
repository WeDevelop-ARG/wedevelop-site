import classnames from 'classnames'
import TextGradient from 'main_app/components/TextGradient'

import classes from './styles.module.scss'

const TechSolutions = ({ presentationPhotoURL, title, imageContainer, description }) => {
  return (
    <div className={classes.subSection}>
      <h2 className={classes.title}>
        <TextGradient title={title} />
      </h2>
      <div className={imageContainer ? classes.rightImageContainer : classes.leftImageContainer}>
        <img src={presentationPhotoURL} alt='' role='presentation' />
      </div>
      <span className={imageContainer ? classes.circleEmpty : ''}> </span>
      <div className={classnames(classes.textContainer, classes.firstTextContainer)}>
        <h2 className={classes.title}>
          <TextGradient title={title} />{' '}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default TechSolutions
