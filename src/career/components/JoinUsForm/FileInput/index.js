import { isEmpty } from 'lodash'
import SuccessUploaded from './SuccessUploaded'

function FileInput ({ form, field }) {
  const handleChange = (event) => {
    const file = event.currentTarget.files[0]
    form.setFieldTouched(field.name)
    form.setFieldValue(field.name, file, true)
  }

  if (!isEmpty(field.value)) return <SuccessUploaded file={field.value} />
  
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
