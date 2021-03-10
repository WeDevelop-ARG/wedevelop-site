import { useCallback } from 'react'
import { Formik, Form as FormikForm } from 'formik'

function Form ({
  onSubmit,
  initialValues,
  validationSchema,
  children,
  className
}) {
  const handleSubmit = useCallback(async (values, actions) => {
    try {
      await onSubmit?.(values)
    } finally {
      actions.setSubmitting(false)
    }
  }, [onSubmit])

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <FormikForm className={className}>
        {children}
      </FormikForm>
    </Formik>
  )
}

export default Form
