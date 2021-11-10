import { React } from 'react'
import { useField } from 'formik'
import ReactFlagsSelect from 'react-flags-select'

import classnames from 'classnames'
import classes from './styles.module.scss'

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
      selectButtonClassName={classnames(classes.countrySelect, {
        [classes.textCountry]: fieldValue,
        [classes.textCountrySelect]: !fieldValue
      })}
      onBlur={() => setTouched(true)}
    />
  )
}

export default CountrySelect
