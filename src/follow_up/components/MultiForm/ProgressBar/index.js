import { useMemo } from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar'

import classes from './styles.module.scss'

function FormProgress ({ currentStep, totalSteps }) {
  const progressPercentage = useMemo(() => {
    return Math.round((currentStep * 100) / totalSteps)
  }, [currentStep, totalSteps])

  return (
    <ProgressBar now={progressPercentage} className={classes.progress} />
  )
}

export default FormProgress
