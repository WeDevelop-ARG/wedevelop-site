import Button from 'main_app/components/Button'

import WrappedImage from 'main_app/components/WrappedImage'

import SuccessUploadedIcon from 'assets/career/successUploaded.svg'
import DeleteFile from 'assets/career/deleteFile.svg'

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
        <WrappedImage
          src={SuccessUploadedIcon}
          layout='fixed'
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
        <WrappedImage src={DeleteFile} layout='fixed' alt='' />
      </Button>
    </div>
  )
}
