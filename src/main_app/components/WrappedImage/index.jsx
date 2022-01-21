import classNames from 'classnames'
import Image from 'next/image'

import classes from './styles.module.scss'

export default function WrappedImage ({ className, style, src, width, height, layout, ...props }) {
  let hasExplicitSize = false

  if(src.width && src.height){
    hasExplicitSize = width || height

    if (width && !height) {
      height = width * (src.height / src.width)
    } else if (height && !width) {
      width = height * (src.width / src.height)
    } else if (!height && !width) {
      height = src.height
      width = src.width
    }
  }

  return (
    <div
      className={classNames(classes.wrapper, className)}
      style={{
        width: hasExplicitSize && layout !== 'fixed' ? Number(width) : undefined,
        height: hasExplicitSize && layout !== 'fixed' ? Number(height) : undefined,
        ...style
      }}
    >
      <Image
        width={layout === 'fixed' ? width : undefined}
        height={layout === 'fixed' ? height : undefined}
        src={src}
        layout={layout}
        {...props}
      />
    </div>
  )
}
