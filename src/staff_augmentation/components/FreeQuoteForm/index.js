import { useCallback } from 'react'
import { useHistory } from 'react-router'

import HubspotFreeQuoteForm from '../HubspotFreeQuoteForm'

import classes from './styles.module.scss'

function FreeQuoteForm ({
  formHeader,
  formOrigin
}) {
  const history = useHistory()
  const handleSubmitFinished = useCallback(tracingId => {
    history.push('/follow-up?tracingId=' + tracingId)
  }, [history])

  return (
    <>
      <div className={classes.formHeader}>
        <p className={classes.subheadingText}>{formHeader.subtitle}</p>
        <h2 className={classes.titleText}>{formHeader.title}</h2>
        <p className={classes.descriptionText}>{formHeader.description}</p>
        <hr className={classes.horizontalBar} />
      </div>
      <HubspotFreeQuoteForm
        formOrigin={formOrigin}
        handleSubmitFinished={handleSubmitFinished}
      />
    </>
  )
}

export default FreeQuoteForm
