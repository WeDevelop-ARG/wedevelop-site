import classNames from 'classnames'

import useMediaQuery from 'utils/use_media_query'

import { forDesktopUp } from 'styles/media_queries'

import WrappedImage from 'main_app/components/WrappedImage'

import classes from './styles.module.scss'

function Step ({ className, icon, title, description, isLast, arrow }) {
  const isDesktopUp = useMediaQuery(forDesktopUp)
  return (
    <div className={classNames(classes.column, className)}>
      {!isDesktopUp && icon}
      <div className={classes.textContainer}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        {!isLast && <WrappedImage src={arrow} alt='' className={classes.arrows} />}
      </div>
    </div>
  )
}

export default Step
