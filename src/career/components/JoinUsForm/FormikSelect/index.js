import React from 'react'
import { useField } from 'formik'
import Select from 'react-select'

function FormikSelect ({ name, options, placeholder }) {
  const [, { value: fieldValue }, { setValue, setTouched }] = useField(name)

  return (
    <Select
      options={options}
      isMulti
      onChange={(values) => {
        setValue(values.map(({ value }) => value), true)
      }}
      value={options.filter(opt => fieldValue?.includes(opt.value))}
      placeholder={placeholder}
      onBlur={setTouched}
    />
  )
}

export default FormikSelect
