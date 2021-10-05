import { React, useState } from 'react'
import { useField } from 'formik/dist/formik.esm'
import CreatableSelect from 'react-select/creatable'

function FormikSelect ({ name, options, placeholder }) {
  const [, { value: fieldValue }, { setValue, setTouched }] = useField(name)
  const [allOptions, setOptions] = useState(options)

  return (

    <CreatableSelect
      options={options}
      isMulti
      onChange={(values) => {
        setTouched(true)
        setValue(values.map(({ value }) => value), true)
        setOptions([...new Set(options.concat(values))])
      }}
      value={allOptions ? allOptions.find(option => option.value === fieldValue) : ''}
      placeholder={placeholder}
      onBlur={() => setTouched(true)}
      formatCreateLabel={(skill) => `Other: "${skill}"`}
    />
  )
}

export default FormikSelect
