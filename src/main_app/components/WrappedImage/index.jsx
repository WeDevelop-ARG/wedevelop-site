import classNames from 'classnames'
import Image from 'next/image'

import classes from './styles.module.scss'

export default function WrappedImage ({ className, style, src, width, height, ...props }) {

  if(src.width && src.height){
    if (width && !height) {
      height = width * (src.height / src.width)
    } else if (height && !width) {
      width = height * (src.width / src.height)
    } else if (!height && !width){
      height = src.height
      width = src.width
    }
  }

  return (
    <div className={classNames(classes.wrapper, className)} style={style}>
      <Image height={height} width={width} src={src} {...props} />
    </div>
  )
}
