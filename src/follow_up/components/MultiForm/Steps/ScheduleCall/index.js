import StepHeader from '../../StepHeader'
import ControlButtons from '../../ControlButtons'
import CalendlyWidget from 'main_app/components/CalendlyWidget'

function ScheduleCall ({ currentStep, previousStep, totalSteps, skipModal }) {
  return (
    <section>
      <StepHeader
        title='Schedule a call with us'
        description='We look forward to learning how WeDevelop can help you and your business'
      />
      <div>
        <CalendlyWidget sourcePage='follow-up' hideText />
      </div>
      <ControlButtons
        currentStep={currentStep}
        previousStep={previousStep}
        totalSteps={totalSteps}
        handleModal={skipModal}
      />
    </section>
  )
}

export default ScheduleCall
