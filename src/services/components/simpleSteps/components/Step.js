import classes from './step.module.scss'
import React from 'react'

function Step({ number, title, description }) {
  return (
    <div className={classes.column}>
      <div className={classes.numberBackground}>
        <span className={classes.number}>{number}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Step
