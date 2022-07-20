import React from 'react'
import classNames from 'classnames'

import useMediaQuery from 'utils/use_media_query'
import { forDesktopUp } from 'styles/media_queries'

import classes from './styles.module.scss'

function Step ({ className, icon, title, description }) {
  const isDesktopUp = useMediaQuery(forDesktopUp)

  return (
    <div className={classNames(classes.column, className)}>
      {isDesktopUp && icon}
      <div className={classes.textContainer}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  )
}

export default Step
