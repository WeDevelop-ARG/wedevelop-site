import classnames from 'classnames'

import classes from './styles.module.scss'

function BackgroundContainer ({ backgroundURL, className }) {
  return (
    <div className={classnames(classes.backgroundContainer, className)}>
      <img src={backgroundURL} alt='' className={classes.backgroundImg} />
    </div>
  )
}

export default BackgroundContainer
