import { useMemo, useState, useRef, useEffect } from 'react'
import { Cloudinary } from '@cloudinary/url-gen'
import { format, dpr, quality } from '@cloudinary/url-gen/actions/delivery'
import { fill, limitFit } from '@cloudinary/url-gen/actions/resize'
import { blur } from '@cloudinary/url-gen/actions/effect'
import isString from 'lodash/isString'
import isFunction from 'lodash/isFunction'
import isEmpty from 'lodash/isEmpty'
import classNames from 'classnames'

import { BASE_URL, IS_DEVELOPMENT, IS_PREVIEW_BUILD, IS_STATIC_RENDERER } from 'main_app/constants.js'

import classes from './styles.module.scss'

const cloudinaryDenylistExtensionsRegex = /\.?(?:svg)$/i
const optimizationAllowedHostnames = ['wedevelop.me', 'testing.wedevelop.me']
const cloudinary = new Cloudinary({
  cloud: { cloudName: 'wedevelop-site' }
})
const responsiveSizeStep = 200

function isOptimizationDenied (url) {
  if(IS_PREVIEW_BUILD) return cloudinaryDenylistExtensionsRegex.test(url)

  try {
    return (
      IS_PREVIEW_BUILD ||
      cloudinaryDenylistExtensionsRegex.test(url) ||
      !optimizationAllowedHostnames.includes(
        (new URL(url, BASE_URL)).hostname
      )
    )
  } catch (err) {
    console.error(err)
    return true
  }
}

function createCloudinaryImage ({ src, objectFit, isPlaceholder, position, resize, width, height }) {
  if (resize === 'auto-width') {
    width = undefined
  } else if (resize === 'auto-height') {
    height = undefined
  }

  const image = cloudinary.image(src)

  image.setDeliveryType('fetch')
  image.delivery(quality('auto'))
  image.delivery(format('auto'))
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
      blur(1500)
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
  placeholderColor,
  ...props
}) {
  if (IS_DEVELOPMENT && !isString(alt)) {
    console.error('Images must have an "alt" attribute:', src)
  }

  const [optimizedSrc, setOptimizedSrc] = useState()
  const [backgroundSrc, setBackgroundSrc] = useState()
  const [backgroundColor, setBackgroundColor] = useState(placeholderColor)
  const containerRef = useRef()
  const fullURL = useMemo(() => !src ? src : (new URL(src, BASE_URL)).href, [src])

  useEffect(() => {
    if (isOptimizationDenied(fullURL)) return setOptimizedSrc(src)

    const img = new window.Image()
    img.onerror = (err) => {
      console.warn("Failed to load image", err)
      setOptimizedSrc(previousSrc => {
        setBackgroundSrc(previousSrc)

        return src
      })
    }
    img.onload = () => {
      if (img.src !== null) {
        setOptimizedSrc(previousSrc => {
          setBackgroundSrc(previousSrc)

          return img.src
        })
      }
    }

    let lastSize
    const onResize = () => {
      const containerSize = getImageContainerSize(containerRef.current, { width, height })

      if (shouldLoadBiggerImage(lastSize, containerSize)) {
        const image = createCloudinaryImage({ src: fullURL, objectFit, position, resize, ...containerSize })
        const placeholderImage = createCloudinaryImage({ isPlaceholder: true, src: fullURL, objectFit, position, resize, ...containerSize })

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
  }, [src, fullURL, objectFit, position, width, height, resize, props.loading])

  const img = (
    <img
      src={optimizedSrc}
      alt={alt}
      loading={props.loading}
      onLoad={() => {
        setBackgroundSrc(undefined)
        setBackgroundColor(undefined)
      }}
      className={classNames(classes.image, {
        [className]: !objectFit || objectFit === 'none',
        [classes[objectFit]]: !isEmpty(classes[objectFit]),
        [classes[position]]: !isEmpty(classes[position])
      })}
      style={{
        backgroundColor: backgroundColor && !backgroundSrc ? backgroundColor : undefined,
        backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : undefined
      }}
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
