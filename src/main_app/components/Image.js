import { useMemo } from 'react'
import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react'
import { Cloudinary } from "@cloudinary/url-gen"
import { format, dpr, quality } from '@cloudinary/url-gen/actions/delivery'
import isString from 'lodash/isString'

import { IS_DEVELOPMENT, BASE_URL } from 'main_app/constants.js'

const cloudinaryDenylistRegex = /(?:^(?!https:\/\/).*\.?(?:svg)?$|.*\.?(?:svg)$)/i
const cloudinary = new Cloudinary({
  cloud: { cloudName: 'wedevelop-site' }
})

export default function Image ({ src, alt, ...props }) {
  src = useMemo(() => (new URL(src, BASE_URL)).href, [src])
  const image = useMemo(() => {
    const image = cloudinary.image(src)
    image.setDeliveryType('fetch')
    image.delivery(quality('auto'))
    image.delivery(format('auto'))
    image.delivery(dpr('auto'))
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
        data-cloud-url={!IS_DEVELOPMENT && isOptimizationDenied ? undefined : image.toURL()}
        alt={alt}
        {...props}
      />
    )
  }

  return (
    <AdvancedImage
      cldImg={image}
      plugins={[lazyload(), responsive(200), placeholder('predominant-color')]}
      alt={alt}
      {...props}
    />
  )
}
