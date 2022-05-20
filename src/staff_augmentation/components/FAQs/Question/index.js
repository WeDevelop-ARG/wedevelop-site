import { useCallback, useState } from 'react'

import Button from 'main_app/components/Button'

import PlusIcon from 'assets/staff_augmentation/faqs/plus_icon.component.svg'
import MinusIcon from 'assets/staff_augmentation/faqs/minus_icon.component.svg'

import classes from './styles.module.scss'
import classNames from 'classnames'

export default function Question ({ question, answer }) {
  const [displayAnswer, setDisplayAnswer] = useState(false)
  const [displaySeeLessIcon, setDisplaySeeLessIcon] = useState(false)
  const handleShowToggleContainer = useCallback(() => {
    setDisplaySeeLessIcon(true)
    setDisplayAnswer(true)
  }, [setDisplayAnswer, setDisplaySeeLessIcon])
  const handleHideToggleContainer = useCallback(() => {
    setDisplaySeeLessIcon(false)
    setDisplayAnswer(false)
  }, [setDisplayAnswer, setDisplaySeeLessIcon])

  return (
    <div className={classes.container}>
      <Button
        variant='link'
        iconRight={displaySeeLessIcon ? <MinusIcon /> : <PlusIcon />}
        onClick={() => {
          if (!displayAnswer) {
            handleShowToggleContainer()
          } else {
            handleHideToggleContainer()
          }
        }}
        className={classes.displayButton}
      >
        {question}
      </Button>
      <div className={classNames(classes.answer, {
        [classes.displayAnswer]: displayAnswer
      })}
      >
        {answer}
      </div>
      <hr className={classes.separator} />
    </div>
  )
}
