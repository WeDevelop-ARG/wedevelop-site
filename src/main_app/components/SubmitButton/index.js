import { useFormikContext } from 'formik/dist/formik.esm'
import isEmpty from 'lodash/isEmpty'
import { useMemo } from 'react'

import { combineVariants } from 'utils/use_variants'

import Button from '../Button'

function SubmitButton ({ variant, ...props }) {
  const { errors, isSubmitting, isValidating, touched } = useFormikContext()
  const hasErrors = !isEmpty(errors)
  const isTouched = !isEmpty(touched)

  variant = useMemo(() => {
    if (hasErrors && isTouched) {
      return combineVariants(variant, 'disabled')
    }

    return variant
  }, [variant, hasErrors, isTouched])

  return (
    <Button
      type='submit'
      disabled={isSubmitting || isValidating}
      variant={variant}
      {...props}
    />
  )
}

export default SubmitButton
