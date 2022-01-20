import { useCallback } from 'react'
import isNil from 'lodash/isNil'
import SuccessUploaded from './SuccessUploaded'

function FileInput ({ form, field, children }) {
  const handleChange = (event) => {
    const file = event.currentTarget.files[0]
    form.setFieldTouched(field.name)
    form.setFieldValue(field.name, file, true)
  }

  const handleDeleteFile = useCallback(() => {
    form.setFieldValue(field.name, undefined, true)
  }, [form, field])

  if (!isNil(field.value)) return <SuccessUploaded fileName={field.value.name} fileSize={field.value.size} handleDeleteFile={handleDeleteFile} />

  return (
    <>
      <input
        type='file'
        onChange={(input) => handleChange(input)}
        style={{ display: 'none' }}
        aria-hidden='true'
      />
      {children}
    </>
  )
}

export default FileInput
