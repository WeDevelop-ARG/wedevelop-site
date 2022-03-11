import { useMemo } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useField } from 'formik'

import WrappedImage from 'main_app/components/WrappedImage'

import UploadingFileIcon from 'assets/career/uploadingFile.svg'

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
        <WrappedImage
          src={UploadingFileIcon}
          layout='fixed'
          alt=''
          className={classes.uploadingFile}
        />
        <p className={classes.fileUploadLabel}>{name}</p>
      </div>
      <ProgressBar now={progressPercentage} className={classes.progress} />
    </label>
  )
}
