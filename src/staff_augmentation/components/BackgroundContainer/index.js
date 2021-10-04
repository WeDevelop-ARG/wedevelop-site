import classnames from 'classnames'
import Image from 'main_app/components/Image'

import classes from './styles.module.scss'

function BackgroundContainer ({ backgroundURL, className }) {
  return (
    <div className={classnames(classes.backgroundContainer, className)}>
      <Image src={backgroundURL} objectFit='cover' alt='' />
    </div>
  )
}

export default BackgroundContainer
