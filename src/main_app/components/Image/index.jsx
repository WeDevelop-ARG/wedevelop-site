import {default as NextImage} from 'next/image'

export default function Image ({ src, width, height, layout, alt, ...props }) {
  if (src.width && src.height) {
    if (width && !height) {
      height = width * (src.height / src.width)
    } else if (height && !width) {
      width = height * (src.width / src.height)
    } else if (!height && !width) {
      height = src.height
      width = src.width
    }
  }

  const isVectorImage = src.src.endsWith('.svg')
  return (
    <NextImage
      width={layout === 'fixed' ? width : undefined}
      height={layout === 'fixed' ? height : undefined}
      src={src}
      loader={isVectorImage ? ({ src }) =>src : undefined}
      unoptimized={isVectorImage ? true : undefined}
      layout={layout}
      alt={alt ?? ''}
      {...props}
    />
  )
}
