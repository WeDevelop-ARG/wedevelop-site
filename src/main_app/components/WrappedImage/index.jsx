import classNames from 'classnames'
import Image from 'next/image'

import classes from './styles.module.scss'

export default function WrappedImage ({ className, style, ...props }) {
  return (
    <div className={classNames(classes.wrapper, className)} style={style}>
      <Image {...props} />
    </div>
  )
}
