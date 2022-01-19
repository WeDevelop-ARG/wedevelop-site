import { useMemo } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useField } from 'formik'

import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

export default function UploadingFile ({ currentProgress, inputName }) {
  const [input] = useField(inputName)
  const { name } = input.value
  const progressPercentage = useMemo(() => {
    return Math.round(currentProgress * 100)
  }, [currentProgress])

  return (
    <label className={classes.fileUploadField}>
      <div className={classes.field}>
        <SVGIcon
          name='career/uploadingFile'
          alt=''
          className={classes.uploadingFile}
        />
        <p className={classes.fileUploadLabel}>{name}</p>
      </div>
      <ProgressBar now={progressPercentage} className={classes.progress} />
    </label>
  )
}
