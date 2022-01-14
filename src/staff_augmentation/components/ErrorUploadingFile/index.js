import SVGIcon from 'main_app/components/SVGIcon'
import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

export default function ErrorUploadingFile ({ retryButtonProps }) {
  return (
    <label className={classes.fileUploadField}>
      <div className={classes.field}>
        <SVGIcon name='career/errorUploadingFile' />
        <p className={classes.fileUploadLabel}>Something went wrong trying to upload your file.</p>
        <Button variant='link' className={classes.tryAgain} {...retryButtonProps}>
          Try again
        </Button>
      </div>
    </label>
  )
  // TODO: Agregar props para Try again
}
