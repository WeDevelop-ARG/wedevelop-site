import classnames from 'classnames'
import WrappedImage from 'main_app/components/WrappedImage'

import classes from './styles.module.scss'

function BackgroundContainer ({ backgroundURL, className }) {
  let height

  if (backgroundURL.width && backgroundURL.height) {
    height = `${backgroundURL.height / backgroundURL.width}vw`
  }

  return (
    <WrappedImage
      src={backgroundURL}
      style={{ height }}
      layout='responsive'
      alt=''
      className={classnames(classes.backgroundContainer, className)}
    />
  )
}

export default BackgroundContainer
