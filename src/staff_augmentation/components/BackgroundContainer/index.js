import { useEffect, useState } from 'react'
import classnames from 'classnames'

import WrappedImage from 'main_app/components/WrappedImage'

import classes from './styles.module.scss'

function BackgroundContainer ({ backgroundURL, className }) {
  const [height, setHeight] = useState(() => {
    if (backgroundURL.width && backgroundURL.height) {
      return `${backgroundURL.height / backgroundURL.width}vw`
    }
  })

  useEffect(() => {
    const handleResize = () => {
      setHeight(`${document.body.clientWidth * backgroundURL.height / backgroundURL.width}px`)
    }
    handleResize()

    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize, { passive: true })
    }
  }, [backgroundURL.height, backgroundURL.width])

  return (
    <WrappedImage
      src={backgroundURL}
      style={{ height }}
      layout='responsive'
      placeholder='blur'
      alt=''
      className={classnames(classes.backgroundContainer, className)}
    />
  )
}

export default BackgroundContainer
