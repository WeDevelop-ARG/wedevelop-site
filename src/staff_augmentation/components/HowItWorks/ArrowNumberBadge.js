import classnames from 'classnames'

import classes from './styles.module.scss'

function ArrowNumberBadge ({ children, lightArrowTip, showRightArrowTip }) {
  return (
    <div className={classes.arrowContainer}>
      <div 
        className={classnames(classes.arrowTip, {[classes.withLightColor]: lightArrowTip})} 
        aria-hidden='true'
      />
      <div className={classes.numericBadge}>
        {children}
      </div>
      {showRightArrowTip && <div className={classnames(classes.arrowTip, classes.withLightColor)} aria-hidden='true' />}
    </div>
  )
}

export default ArrowNumberBadge
