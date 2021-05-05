import { useState, useCallback } from 'react'

import GetFreeQuoteContent from './GetFreeQuoteContent'
import GetFreeQuoteConfirmationMessage from './GetFreeQuoteConfirmationMessage'

import classes from './styles.module.scss'

function GetFreeQuote () {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmitFinished = useCallback (() => {
    setIsSubmitted(true)
  }, [])
  return (
    <div id='get-free-quote' className={classes.sectionContainer}>
      <h3 className={classes.formTitle}>
        Efficient IT Staffing <span className={classes.gradientText}>to work for you</span>
      </h3>
      {!isSubmitted && <GetFreeQuoteContent onSubmitFinished={handleSubmitFinished} />}
      {isSubmitted && <GetFreeQuoteConfirmationMessage />}
    </div>
  )
}

export default GetFreeQuote
