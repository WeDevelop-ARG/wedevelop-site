import classnames from 'classnames'

import classes from './styles.module.scss'

function SectionWithSideImage ({ className, title, description, imageURL, imageAtRight }) {
  return (
    <section className={classnames(classes.container, { [className]: className })}>
      <h2 className={classes.title}>{title}</h2>
      <div className={imageAtRight ? classes.rightImageContainer : classes.leftImageContainer}>
        <img src={imageURL} alt='' role='presentation' loading='lazy' />
      </div>
      <div className={classes.description}>
        <h2 className={classes.title}>{title}</h2>
        {description}
      </div>
    </section>
  )
}

export default SectionWithSideImage
