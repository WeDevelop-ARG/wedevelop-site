import { React } from 'react'
import { useField } from 'formik'
import ReactFlagsSelect from 'react-flags-select'

function CountrySelect ({ name, placeholder }) {
  const [, { value: fieldValue }, { setValue, setTouched }] = useField(name)

  return (
    <ReactFlagsSelect
      selected={fieldValue}
      onSelect={(code) => {
        setTouched(true)
        setValue(code)
      }}
      searchable='true'
      placeholder={placeholder}
      searchPlaceholder='Search a country'
      onBlur={() => setTouched(true)}
    />
  )
}

export default CountrySelect
