import classNames from 'classnames'
import Image from 'next/image'

import classes from './styles.module.scss'

export default function WrappedImage ({ className, ...props }) {
  return (
    <div className={classNames(classes.wrapper, className)}>
      <Image {...props} />
    </div>
  )
}
