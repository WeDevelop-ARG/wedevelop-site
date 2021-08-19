function FileInput ({ form, field }) {
  const handleChange = async (e) => {
    const file = e.currentTarget.files[0]
    const reader = new window.FileReader()

    reader.readAsDataURL(file)

    reader.onload = await function (event) {
      form.setFieldValue(field.name, event.target?.result)
    }
  }

  return (
    <input type='file' onChange={(input) => handleChange(input)} />
  )
}

export default FileInput
