import Button from 'main_app/components/Button'
import SVGIcon from 'main_app/components/SVGIcon'

import WrappedImage from 'main_app/components/WrappedImage'

import ErrorIcon from 'assets/career/errorUploadingFile.svg'

import classes from './styles.module.scss'

export default function ErrorUploadingFile ({ retryButtonProps }) {
  return (
    <div className={classes.field}>
      <div className={classes.errorUploadingMessage}>
        <WrappedImage
          src={ErrorIcon}
          layout='fixed'
          alt=''
          className={classes.errorUploadingFile}
        />
        <p className={classes.fileUploadLabel}>
          Something went wrong trying to upload your file.
        </p>
      </div>
      <Button variant='link' className={classes.tryAgain} {...retryButtonProps}>
        Try again
      </Button>
    </div>
  )
}
