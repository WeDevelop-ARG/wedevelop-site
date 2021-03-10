import { useCallback } from 'react'
import classnames from 'classnames'
import { useField } from 'formik'
import { isEmpty } from 'lodash'

function useFieldWithErrorClassName (Field, errorClassName) {
  const AugmentedField = useCallback(({ name, className, ...props }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, { error, touched }] = useField({ name })

    return (
      <Field
        name={name}
        className={classnames(className, {
          [errorClassName]: touched && !isEmpty(error)
        })}
        {...props}
      />
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Field, errorClassName])

  return AugmentedField
}

export default useFieldWithErrorClassName
