import StepHeader from '../../StepHeader'
import FormikSelect from 'main_app/components/FormikSelect'
import FormLogic from './FormLogic'

import useSkillOptions from 'main_app/components/useSkillOptions'

function Technologies () {
  const technologies = useSkillOptions()
  const initialValues = {
    technologies: []
  }
  return (
    <section>
      <StepHeader
        title='Technologies'
        description='Morbi adipiscing sodales consequat'
      />
      <FormLogic
        initialValues={initialValues}
      >
        <FormikSelect
          name='technologies'
          options={technologies}
          placeholder='Select a technology'
        />
      </FormLogic>
    </section>
  )
}

export default Technologies
