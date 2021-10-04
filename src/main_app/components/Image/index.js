import { useMemo, useState, useRef, useLayoutEffect } from 'react'
import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { format, dpr, quality } from '@cloudinary/url-gen/actions/delivery'
import { fill } from '@cloudinary/url-gen/actions/resize'
import isString from 'lodash/isString'
import classNames from 'classnames'

import { IS_DEVELOPMENT, BASE_URL } from 'main_app/constants.js'

import classes from './styles.module.scss'
import { isEmpty } from 'lodash'

const cloudinaryDenylistRegex = /(?:^(?!https:\/\/).*\.?(?:svg)?$|.*\.?(?:svg)$)/i
const cloudinary = new Cloudinary({
  cloud: { cloudName: 'wedevelop-site' }
})
const responsiveSizeStep = 200

export default function Image ({ src, alt, objectFit, className, ...props }) {
  src = useMemo(() => (new URL(src, BASE_URL)).href, [src])
  const [image, setImage] = useState()
  const containerRef = useRef()
  const isOptimizationDenied = useMemo(() => cloudinaryDenylistRegex.test(src), [src])
  const imgClassName = objectFit === 'cover' ? undefined : className

  useLayoutEffect(() => {
    const createImage = () => {
      const image = cloudinary.image(src)
      image.setDeliveryType('fetch')
      image.delivery(quality('auto'))
      image.delivery(format('auto'))
      image.delivery(dpr('auto'))
      return image
    }

    if (objectFit !== 'cover') {
      setImage(createImage())
    } else {
      let lastSize
      const onResize = () => {
        const boundingRect = containerRef.current.getBoundingClientRect()
        const size = {
          width: Math.ceil(boundingRect.width / 100) * 100,
          height: Math.ceil(boundingRect.height / 100) * 100
        }

        if (
          !lastSize ||
          size.width - lastSize.width >= responsiveSizeStep ||
          size.height - lastSize.height >= responsiveSizeStep
        ) {
          lastSize = size
          const image = createImage()
          image.resize(fill(size.width, size.height))
          setImage(image)
        }
      }
      window.addEventListener('resize', onResize, { passive: true })
      onResize()

      return () => {
        window.removeEventListener('resize', onResize, { passive: true })
      }
    }
  }, [src, objectFit])

  let img = null

  if (IS_DEVELOPMENT || isOptimizationDenied) {
    if (!isString(alt)) {
      console.error('Images must have an "alt" attribute:', src)
    }

    img = (
      <img
        src={src}
        data-cloud-url={!IS_DEVELOPMENT && isOptimizationDenied ? undefined : image?.toURL()}
        alt={alt}
        loading='lazy'
        className={imgClassName}
        {...props}
      />
    )
  } else if (image) {
    const plugins = [lazyload(), placeholder('predominant-color')]

    if (objectFit !== 'cover') {
      plugins.splice(1, 0, responsive(responsiveSizeStep))
    }

    img = (
      <AdvancedImage
        cldImg={image}
        plugins={plugins}
        alt={alt}
        className={imgClassName}
        {...props}
      />
    )
  }

  if (objectFit !== 'cover') return img

  return (
    <div
      ref={containerRef}
      className={classNames(classes.container, {
        [classes[objectFit]]: !isEmpty(classes[objectFit]),
        [className]: !isEmpty(className)
      })}
    >
      {img}
    </div>
  )
}
