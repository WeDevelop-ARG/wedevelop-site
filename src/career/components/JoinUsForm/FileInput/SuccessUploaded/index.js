import SVGIcon from 'main_app/components/SVGIcon'
import classes from './styles.module.scss'

export default function SuccessUploaded(file) {

  return (
    <label className={classes.fileUploadField}>
      <div className={classes.field}>
        <SVGIcon name='career/successUploaded' />
        <p className={classes.fileUploadLabel}>{file.name}</p>
        <p className={classes.size}>{file.size}</p>
      </div>
    </label>
  )
  //TODO: Agregar "eliminar" y hacer que funcione
}
