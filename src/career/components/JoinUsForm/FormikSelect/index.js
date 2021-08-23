import { useField } from 'formik'
import Select from 'react-select'

function FormikSelect (props) {
  const [field, state, { setValue, value, setTouched }] = useField(props.field.name)

  return (
    <div>
      <Select
        {...props}
        isMulti
        value={props.options.find(opt => opt.value === value)}
        onChange={(selectedOption) => {
          setValue(selectedOption.value)
          setTouched(true)
        }}
        onBlur={setTouched}
        placeholder='Select an skill'
      />
    </div>
  )
}

export default FormikSelect
