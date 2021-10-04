import { useMemo, useState, useRef, useEffect } from 'react'
import { Cloudinary } from '@cloudinary/url-gen'
import { format, dpr, quality } from '@cloudinary/url-gen/actions/delivery'
import { fill, limitFit } from '@cloudinary/url-gen/actions/resize'
import isString from 'lodash/isString'
import isFunction from 'lodash/isFunction'
import classNames from 'classnames'

import { IS_DEVELOPMENT, BASE_URL, IS_STATIC_RENDERER } from 'main_app/constants.js'

import classes from './styles.module.scss'
import { isEmpty } from 'lodash'
import { vectorize } from '@cloudinary/url-gen/actions/effect'

const cloudinaryDenylistRegex = /(?:^(?!https:\/\/).*\.?(?:svg)?$|.*\.?(?:svg)$)/i
const cloudinary = new Cloudinary({
  cloud: { cloudName: 'wedevelop-site' }
})
const responsiveSizeStep = 200

function createCloudinaryImage ({ src, objectFit, isPlaceholder, position, resize, width, height }) {
  if (resize === 'auto-width') {
    width = undefined
  } else if (resize === 'auto-height') {
    height = undefined
  }

  const image = cloudinary.image(src)

  image.setDeliveryType('fetch')
  image.delivery(quality('auto'))
  image.delivery(format(isPlaceholder ? 'svg' : 'auto'))
  image.delivery(dpr('auto'))

  let resizeAction
  if (objectFit === 'cover') {
    resizeAction = fill(width, height)
  } else {
    // contain, scale-down, none, auto
    resizeAction = limitFit(width, height)
  }

  if (isFunction(resizeAction?.gravity) && position) {
    resizeAction.gravity(
      position
        .replace(/top/ig, 'north')
        .replace(/bottom/ig, 'south')
        .replace(/left/ig, 'west')
        .replace(/right/ig, 'east')
    )
  }

  if (resizeAction) image.resize(resizeAction)

  if (isPlaceholder) {
    image.effect(
      vectorize()
        .numOfColors(3)
        .detailsLevel(0.3)
        .despeckleLevel(75)
        .paths(25)
        .cornersLevel(50)
    )
  }

  return image
}

function shouldLoadBiggerImage (previousSize, currentSize) {
  return (
    !previousSize ||
    currentSize.width - previousSize.width >= responsiveSizeStep ||
    currentSize.height - previousSize.height >= responsiveSizeStep
  )
}

function getImageContainerSize (container, override) {
  let boundingRect
  if (override.width && override.height) {
    boundingRect = override
  } else if (container) {
    boundingRect = container.getBoundingClientRect()
  } else {
    boundingRect = {
      width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    }
  }

  const width = Math.ceil(boundingRect.width / 100) * 100
  const height = Math.ceil(boundingRect.height / 100) * 100

  return { width, height }
}

export default function Image ({
  src,
  alt,
  objectFit,
  position,
  resize,
  className,
  width,
  height,
  ...props
}) {
  if (IS_DEVELOPMENT && !isString(alt)) {
    console.error('Images must have an "alt" attribute:', src)
  }

  const [optimizedSrc, setOptimizedSrc] = useState()
  const containerRef = useRef()
  src = useMemo(() => !src ? src : (new URL(src, BASE_URL)).href, [src])
  const isOptimizationDenied = useMemo(() => cloudinaryDenylistRegex.test(src), [src])

  useEffect(() => {
    if (isOptimizationDenied) return setOptimizedSrc(src)

    const img = new window.Image()
    img.onload = () => { if (img.src !== null) setOptimizedSrc(img.src) }

    let lastSize
    const onResize = () => {
      const containerSize = getImageContainerSize(containerRef.current, { width, height })

      if (shouldLoadBiggerImage(lastSize, containerSize)) {
        const image = createCloudinaryImage({ src, objectFit, position, resize, ...containerSize })
        const placeholderImage = createCloudinaryImage({ isPlaceholder: true, src, objectFit, position, resize, ...containerSize })

        if (props.loading !== 'eager' && !lastSize) {
          if (!IS_STATIC_RENDERER) setOptimizedSrc(image.toURL())
        } else {
          if (!lastSize) setOptimizedSrc(placeholderImage.toURL())
          if (!IS_STATIC_RENDERER) img.src = image.toURL()
        }
        lastSize = containerSize
      }
    }
    window.addEventListener('resize', onResize, { passive: true })
    onResize()

    return () => {
      img.src = null
      window.removeEventListener('resize', onResize, { passive: true })
    }
  }, [src, objectFit, isOptimizationDenied, position, width, height, resize, props.loading])

  const img = (
    <img
      src={optimizedSrc}
      alt={alt}
      loading='lazy'
      className={objectFit === 'cover' ? undefined : className}
      {...props}
    />
  )

  if (objectFit && objectFit !== 'none') {
    return (
      <div
        ref={containerRef}
        className={classNames(classes.container, {
          [classes[objectFit]]: !isEmpty(classes[objectFit]),
          [classes[position]]: !isEmpty(classes[position]),
          [className]: !isEmpty(className)
        })}
      >
        {img}
      </div>
    )
  }

  return img
}
