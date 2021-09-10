import classes from './step.module.scss'
import React from 'react'
import classNames from 'classnames'

function Step ({ className, number, title, description }) {
  return (
    <div className={classNames(classes.column, className)}>
      <div className={classes.numberBackground}>
        <h3 className={classes.number}>{number}</h3>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Step
