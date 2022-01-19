import classnames from 'classnames'
import Image from 'next/image'

import classes from './styles.module.scss'

function BackgroundContainer ({ backgroundURL, className }) {
  return (
    <div className={classnames(classes.backgroundContainer, className)}>
      <Image src={backgroundURL} objectFit='auto' resize='auto-height' alt='' />
    </div>
  )
}

export default BackgroundContainer
