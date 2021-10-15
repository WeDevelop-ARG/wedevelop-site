import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'

import LeftArrow from 'assets/follow_up/left_arrow.svg'

import classes from './styles.module.scss'

function ControlButtons ({ SW, currentStep }) {
  const { previousStep, nextStep, totalSteps } = SW
  const btnLeftArrow = <Image src={LeftArrow} alt='' />
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
        <Button
          onClick={nextStep}
          className={classes.nextButton}
        >
          Next
        </Button>}
      {isFinalStep &&
        <Button
          className={classes.nextButton}
        >
          Done
        </Button>}
    </div>
  )
}

export default ControlButtons
