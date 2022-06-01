import Abel from 'assets/staff_augmentation/abel_circle.png'
import classNames from 'classnames'
import WrappedImage from 'main_app/components/WrappedImage'
import FreeQuoteForm from '../FreeQuoteForm'
import * as classes from './styles.module.scss'

export default function ScheduleFormBasic ({
  onSubmit,
  className,
  formOrigin
}) {
  return (
    <div
      className={classNames(classes.scheduleFormBasic, className)}
      id='get-in-touch-form'
    >
      <WrappedImage src={Abel} className={classes.avatarTeamWork} alt='' height='100' width='100' />
      <h2 className={classes.scheduleTitle}>Let's talk!</h2>
      <FreeQuoteForm
        formOrigin={formOrigin}
        onSuccess={onSubmit}
      />
    </div>
  )
}
