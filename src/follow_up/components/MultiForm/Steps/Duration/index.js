import StepHeader from '../../StepHeader'
import RadioButtonList from 'main_app/components/RadioButtonList'
import FormLogic from './FormLogic'

function Duration () {
  const duration = [{
    value: 'Less than 3 months',
    label: 'Less than 3 months'
  },
  {
    value: '3 to 6 months',
    label: '3 to 6 months'
  },
  {
    value: '6 to 12 moths',
    label: '6 to 12 moths'
  },
  {
    value: 'More than a year',
    label: 'More than a year'
  },
  {
    value: 'I don\'t know',
    label: 'I don\'t know'
  }]
  const initialValues = {
    duration: ''
  }

  return (
    <section>
      <StepHeader
        title='Duration'
        description='Contract duration'
      />
      <FormLogic
        initialValues={initialValues}
      >
        <RadioButtonList
          name='duration'
          options={duration}
        />
      </FormLogic>
    </section>
  )
}

export default Duration
