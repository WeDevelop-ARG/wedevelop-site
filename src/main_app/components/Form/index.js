import { useCallback } from 'react'
import { Formik, Form as FormikForm } from 'formik'

function Form ({
  onSubmit,
  resetOnSuccessfulSubmit,
  initialValues,
  validationSchema,
  children,
  className
}) {
  const handleSubmit = useCallback(async (values, actions) => {
    try {
      await onSubmit?.(values, actions)

      if (resetOnSuccessfulSubmit) actions.resetForm()
    } finally {
      actions.setSubmitting(false)
    }
  }, [onSubmit, resetOnSuccessfulSubmit])

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
