import Button from 'main_app/components/Button'
import SVGIcon from 'main_app/components/SVGIcon'
import classes from './styles.module.scss'

export default function SuccessUploaded ({
  fileName,
  fileSize,
  handleDeleteFile
}) {
  const fileSizeInKb = (fileSize / 1000).toFixed(2)
  return (
    <div className={classes.field}>
      <div className={classes.deleteFieldMessage}>
        <SVGIcon
          name='career/successUploaded'
          alt=''
          className={classes.successUploaded}
        />
        <p className={classes.fileUploadLabel}>{fileName}</p>
        <p className={classes.size}>({fileSizeInKb}kB)</p>
      </div>
      <Button
        variant='icon'
        className={classes.deleteButton}
        onClick={handleDeleteFile}
      >
        <SVGIcon name='career/deleteFile' alt='' />
      </Button>
    </div>
  )
}
