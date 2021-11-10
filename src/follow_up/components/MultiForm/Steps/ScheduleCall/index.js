import StepHeader from '../../StepHeader'
import ControlButtons from '../../ControlButtons'
import CalendlyWidget from 'main_app/components/CalendlyWidget'

function ScheduleCall ({ currentStep, previousStep, totalSteps, skipModal, tracingId, contact }) {
  return (
    <section>
      <StepHeader
        title='Schedule a call with us'
        description='We look forward to learning how WeDevelop can help you and your business'
      />
      <div>
        {contact && (
          <CalendlyWidget
            sourcePage='follow-up'
            hideText
            onFinish={skipModal}
            followUpTracingId={tracingId}
            prefill={contact}
          />
        )}
      </div>
      <ControlButtons
        currentStep={currentStep}
        previousStep={previousStep}
        totalSteps={totalSteps}
      />
    </section>
  )
}

export default ScheduleCall
