import StepWizard from 'react-step-wizard'

import FormProgress from './ProgressBar'
import ServiceType from './Steps/ServiceType'
import ItProfessionals from './Steps/ItProfessionals'
import Duration from './Steps/Duration'
import Budget from './Steps/Budget'
import StartingDate from './Steps/StartingDate'
import Technologies from './Steps/Technologies'
import ScheduleCall from './Steps/ScheduleCall'

import classes from './styles.module.scss'

function MultiForm ({ handleModalOpen }) {
  return (
    <>
      <StepWizard
        isLazyMount
        isHashEnabled
        nav={<FormProgress />}
        className={classes.stepWizardContainer}
      >
        <ServiceType hashKey='service-type' />
        <ItProfessionals hashKey='it-professionals' />
        <Duration hashKey='duration' />
        <Budget hashKey='budget' />
        <StartingDate hashKey='starting-date' />
        <Technologies hashKey='technologies' />
        <ScheduleCall
          hashKey='schedule-call'
          skipModal={handleModalOpen}
        />
      </StepWizard>
    </>
  )
}

export default MultiForm
