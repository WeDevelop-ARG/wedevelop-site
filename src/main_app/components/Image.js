import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react'
import { Cloudinary } from "@cloudinary/url-gen"
import { isString } from 'lodash'

import { IS_DEVELOPMENT } from 'main_app/constants.js'
import { useMemo } from 'react'

const cloudinaryDenylistRegex = /\.(svg)/i
const cloudinary = new Cloudinary({
  cloud: { cloudName: 'wedevelop-site' }
})

export default function Image ({ src, alt, ...props }) {
  src = useMemo(() => (new URL(src, window.location.href)).href, [src])
  const image = useMemo(() => {
    const image = cloudinary.image(src)
    image.setDeliveryType('fetch')
    return image
  }, [src])
  const isOptimizationDenied = useMemo(() => cloudinaryDenylistRegex.test(src), [src])

  if (IS_DEVELOPMENT || isOptimizationDenied) {
    if (!isString(alt)) {
      console.error('Images must have an "alt" attribute:', src)
    }

    return (
      <img
        src={src}
        data-cloud-url={isOptimizationDenied ? undefined : image.toURL()}
        alt={alt}
        {...props}
      />
    )
  }

  return (
    <AdvancedImage
      cldImg={image}
      plugins={[lazyload(), responsive(150), placeholder('predominant-color')]}
      alt={alt}
      {...props}
    />
  )
}
