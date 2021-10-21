import StepHeader from '../../StepHeader'
import CalendlyWidget from 'main_app/components/CalendlyWidget'

function ScheduleCall () {
  return (
    <section>
      <StepHeader
        title='Schedule a call with us'
        description='We look forward to learning how WeDevelop can help you and your business'
      />
      <div>
        <CalendlyWidget sourcePage='follow-up' hideText />
      </div>
    </section>
  )
}

export default ScheduleCall
