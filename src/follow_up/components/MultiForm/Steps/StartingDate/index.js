import StepHeader from '../../StepHeader'
import RadioButtonTextCards from 'main_app/components/RadioButtonTextCards'
import FormLogic from './FormLogic'

function StartingDate () {
  const startingDate = [{
    value: 'Immediately',
    label: 'Immediately'
  },
  {
    value: '2-4 weeks',
    label: '2-4 weeks'
  },
  {
    value: 'I don\'t know',
    label: 'I don\'t know'
  }]
  const initialValues = {
    startingDate: ''
  }

  return (
    <section>
      <StepHeader
        title='Starting Date'
        description='Expected Start Date'
      />
      <FormLogic
        initialValues={initialValues}
      >
        <RadioButtonTextCards
          name='startingDate'
          options={startingDate}
        />
      </FormLogic>
    </section>
  )
}

export default StartingDate
