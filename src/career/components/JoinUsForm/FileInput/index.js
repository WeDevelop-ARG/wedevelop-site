function FileInput ({ form, field }) {
  const handleChange = (event) => {
    const file = event.currentTarget.files[0]
    form.setFieldTouched(field.name)
    form.setFieldValue(field.name, file, true)
  }

  return (
    <input
      type='file'
      onChange={(input) => handleChange(input)}
      style={{ display: 'none' }}
      aria-hidden='true'
    />
  )
}

export default FileInput
