import { useCallback, useState } from 'react'
import { useHistory } from 'react-router'

import { INITIAL_LANDING_FORM_PROCESSOR_URL, LANDING_FREE_QUOTE_HUBSPOT_FORM_FORM_ID, LANDING_FREE_QUOTE_HUBSPOT_FORM_PORTAL_ID, LANDING_FREE_QUOTE_HUBSPOT_FORM_REGION } from 'main_app/constants'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import HubspotFreeQuoteForm from '../HubspotFreeQuoteForm'
import LoaderSpinner from 'main_app/components/LoaderSpinner'
import classes from './styles.module.scss'

function FreeQuoteForm ({
  formHeader,
  formOrigin
}) {
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()
  const handleSubmitFinished = useCallback(async values => {
    let tracingId
    try {
      setIsLoading(true)
      const response = await window.fetch(INITIAL_LANDING_FORM_PROCESSOR_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...values, formOrigin })
      })
      logAnalyticsEvent({
        event: 'contact',
        contactType: 'free-quote-form',
        source: formOrigin
      })
      // LinkedIn Ad Conversion Event
      try { window?.lintrk?.('track', { conversion_id: 6505732 }) } catch (e) {}
      const responseJSON = await response.json()
      tracingId = responseJSON.tracingId
      history.push('/follow-up?tracingId=' + tracingId)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [history, formOrigin])

  const onLoadingStateChange = useCallback(isLoading => {
    setIsLoading(isLoading)
  }, [])

  return (
    <>
      <div className={classes.formHeader}>
        <p className={classes.subheadingText}>{formHeader.subtitle}</p>
        <h2 className={classes.titleText}>{formHeader.title}</h2>
        <p className={classes.descriptionText}>{formHeader.description}</p>
        <hr className={classes.horizontalBar} />
      </div>
      <LoaderSpinner
        className={classes.loadingContainer}
        visible={isLoading}
      />
      <HubspotFreeQuoteForm
        region={LANDING_FREE_QUOTE_HUBSPOT_FORM_REGION}
        portalId={LANDING_FREE_QUOTE_HUBSPOT_FORM_PORTAL_ID}
        formId={LANDING_FREE_QUOTE_HUBSPOT_FORM_FORM_ID}
        onLoadingStateChange={onLoadingStateChange}
        onSubmit={handleSubmitFinished}
      />
    </>
  )
}

export default FreeQuoteForm
