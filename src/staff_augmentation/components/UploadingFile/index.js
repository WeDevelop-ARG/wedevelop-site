import { Field } from 'formik'
import FileInput from 'career/components/JoinUsForm/FileInput'
import SVGIcon from 'main_app/components/SVGIcon'
import classes from './styles.module.scss'

export default function UploadingFile() {
  
  return (
  <label className={classes.fileUploadField}>
    <Field
      name='filesAttached'
      component={FileInput}
      aria-hidden='true'
    />
      <div className={classes.field}>
        <SVGIcon name='career/uploadingFile' />
        <p className={classes.fileUploadLabel}>Nombre del archivo</p>
      </div>
  </label>
  )
  //TODO: Agregar prop 'nombre del archivo' y barra de carga en progreso.
}
