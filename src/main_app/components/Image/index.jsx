import * as Amp from 'react-amphtml'

export default function Image ({ src, ...props }) {
  const imageURL = typeof src === 'string' ? src : src?.src
  if (src.height && props.height === undefined) { props.height = src.width }
  if (src.width && props.width === undefined) { props.width = src.width }

  if (props.layout === undefined) { props.layout = 'responsive' }
  if (props.width === undefined) { props.width = 14 }
  if (props.height === undefined) { props.height = 14 }

  return (
    <Amp.AmpImg
      src={imageURL}
      specName='default'
      unoptimized={imageURL?.endsWith('.svg')}
      {...props}
    />
  )
}
