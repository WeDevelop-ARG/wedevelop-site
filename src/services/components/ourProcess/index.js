import React from 'react'
import bg from 'assets/services/our-process-background.png'
import classes from './ourProcess.module.scss'

function OurProcess() {
  return (
    <div className={classes.container}>
      <img className={classes.background} src={bg} alt="" />
    </div>
  )
}

export default OurProcess
