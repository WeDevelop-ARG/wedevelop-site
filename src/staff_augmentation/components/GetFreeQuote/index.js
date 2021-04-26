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
    <section id='get-free-quote'>
      <div className={classes.sectionContainer}>
        {!isSubmitted && <GetFreeQuoteContent onSubmitFinished={handleSubmitFinished} />}
        {isSubmitted && <GetFreeQuoteConfirmationMessage />}
      </div>
    </section>
  )
}

export default GetFreeQuote
