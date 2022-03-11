import NextImage from 'next/image'

export default function Image ({ src, ...props }) {
  const imageURL = typeof src === 'string' ? src : src?.src

  return (
    <NextImage
      src={src}
      unoptimized={imageURL?.endsWith('.svg')}
      {...props}
    />
  )
}
