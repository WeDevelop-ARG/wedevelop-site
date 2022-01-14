import { useMemo } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

export default function UploadingFile ({ currentProgress, fileName }) {
  const progressPercentage = useMemo(() => {
    return Math.round(currentProgress * 100)
  }, [currentProgress])

  return (
    <label className={classes.fileUploadField}>
      <div className={classes.field}>
        <SVGIcon name='career/uploadingFile' />
        <p className={classes.fileUploadLabel}>Nombre del archivo</p>
      </div>
      <ProgressBar now={progressPercentage} className={classes.progress} />
    </label>
  )
}
