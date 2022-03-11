import Button from 'main_app/components/Button'
import SubmitButton from 'main_app/components/SubmitButton'
import Image from 'main_app/components/Image'

import LeftArrow from 'assets/follow_up/left_arrow.svg'

import classes from './styles.module.scss'

function ControlButtons ({ currentStep, previousStep, totalSteps }) {
  const btnLeftArrow = <Image src={LeftArrow} layout='fixed' alt='' />
  const canGoback = currentStep > 1
  const isFinalStep = currentStep === totalSteps
  return (
    <div className={classes.controlButtonsContainer}>
      {canGoback &&
        <Button
          variant='icon'
          iconLeft={btnLeftArrow}
          onClick={previousStep}
          className={classes.prevButton}
        >
          Back
        </Button>}
      {!isFinalStep &&
        <SubmitButton
          variant='primary'
          className={classes.nextButton}
        >
          Next
        </SubmitButton>}
    </div>
  )
}

export default ControlButtons
