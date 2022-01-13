import { Field } from 'formik'
import SVGIcon from 'main_app/components/SVGIcon'
import Button from 'main_app/components/Button'
import FileInput from 'career/components/JoinUsForm/FileInput'

import classes from './styles.module.scss'

export default function ErrorUploadingFile() {
  
  return (
  <label className={classes.fileUploadField}>
    <Field
      name='filesAttached'
      component={FileInput}
      aria-hidden='true'
    />
      <div className={classes.field}>
        <SVGIcon name='career/errorUploadingFile' />
        <p className={classes.fileUploadLabel}>Something went wrong trying to upload your file.</p>
        <Button variant='link' className={classes.tryAgain} onClick={''}>
          Try again
        </Button>
      </div>
  </label>
  )
  //TODO: Agregar props para Try again
}
