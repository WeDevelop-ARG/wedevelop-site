import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'

import LeftArrow from 'assets/follow_up/left_arrow.svg'

import classes from './styles.module.scss'

function ControlButtons ({ SW }) {
  const { currentStep, previousStep, nextStep } = SW
  const btnLeftArrow = <Image src={LeftArrow} alt='' />
  const renderRightButton = () => {
    if (currentStep === 13) {
      return (
        <Button
          className={classes.nextButton}
        >
          Done
        </Button>
      )
    }

    return (
      <Button
        onClick={nextStep}
        className={classes.nextButton}
      >
        Next
      </Button>
    )
  }
  return (
    <div className={classes.controlButtonsContainer}>
      {(currentStep > 1) &&
        <Button
          variant='icon'
          iconLeft={btnLeftArrow}
          onClick={previousStep}
          className={classes.prevButton}
        >
          Back
        </Button>}
      {renderRightButton()}
    </div>
  )
}

export default ControlButtons
