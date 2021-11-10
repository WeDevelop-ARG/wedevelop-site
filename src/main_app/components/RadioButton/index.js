import { useField } from 'formik'

import classes from './styles.module.scss'
import classNames from 'classnames'

function RadioButtonCard ({ name, value, children, className }) {
  const [field] = useField({ type: 'radio', value, name })

  return (
    <label className={classNames(classes.label, className, { [classes.checked]: field.checked })}>
      {children}
      <input
        {...field}
        type='radio'
      />
    </label>
  )
}

export default RadioButtonCard
