function FileInput ({ form, field }) {
  const handleChange = (event) => {
    const file = event.currentTarget.files[0]
    form.setFieldValue(field.name, file)
  }

  return (
    <input
      type='file'
      onChange={(input) => handleChange(input)}
    />
  )
}

export default FileInput
