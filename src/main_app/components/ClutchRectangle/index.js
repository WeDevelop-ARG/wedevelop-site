import { useCallback } from 'react'
import useMediaQuery from 'utils/use_media_query'
import classNames from 'classnames'

import ClutchWidget from '../ClutchWidget'

import classes from './styles.module.scss'

function ClutchRectangle ({ isClutchLoaded, setIsClutchLoaded }) {
  const shouldUseBiggerClutch = useMediaQuery('screen and (min-width: 1550px)')
  const handleClutchLoaded = useCallback(() => {
    setIsClutchLoaded(true)
  }, [setIsClutchLoaded])
  return (
    <div className={classNames(classes.clutchRectangle, { [classes.visuallyHidden]: !isClutchLoaded })}>
      <ClutchWidget
        className={classes.clutchWidget}
        onLoad={handleClutchLoaded}
        verticalAlign='center'
        horizontalAlign='center'
        variant='light'
        height={shouldUseBiggerClutch ? 55 : undefined}
      />
    </div>
  )
}

export default ClutchRectangle
