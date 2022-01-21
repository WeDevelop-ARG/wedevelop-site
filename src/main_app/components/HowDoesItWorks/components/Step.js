import classNames from 'classnames'

import useMediaQuery from 'utils/use_media_query'

import { forDesktopUp } from 'styles/media_queries'

import classes from './styles.module.scss'
import Image from 'next/image'

function Step ({ className, icon, title, description }) {
  const isDesktopUp = useMediaQuery(forDesktopUp)
  return (
    <div className={classNames(classes.column, className)}>
      {!isDesktopUp && icon}
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default Step
