import { useMemo } from 'react'

import Text from './Text'
import Background from './Background'
import Rocket from './Rocket'

function Logo ({
  text = true,
  background = true,
  rocketOnly = false,
  logoOnly = false,
  primaryColor = '#FFFFFF',
  secondaryColor = '#7035AC'
}) {
  text = logoOnly || rocketOnly ? false : text
  background = rocketOnly ? false : background

  const {
    width,
    height,
    offsetX,
    offsetY
  } = useMemo(() => ({
    width: text ? 196 : background ? 50 : 24,
    height: background ? 42 : 33,
    offsetX: background ? 0 : 13,
    offsetY: background ? 0 : 5
  }), [text, background])
  return (
    <svg
      width={width}
      height={height}
      viewBox={`${offsetX} ${offsetY} ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {text && <Text fill={primaryColor} />}
      {background && <Background fill={primaryColor} />}
      <Rocket fill={secondaryColor} />
    </svg>
  )
}

export default Logo
