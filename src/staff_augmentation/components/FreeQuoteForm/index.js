import { useCallback, useState } from 'react'

import {
  INITIAL_LANDING_FORM_PROCESSOR_URL,
  LANDING_FREE_QUOTE_HUBSPOT_FORM_FORM_ID,
  LANDING_FREE_QUOTE_HUBSPOT_FORM_PORTAL_ID,
  LANDING_FREE_QUOTE_HUBSPOT_FORM_REGION
} from 'main_app/constants'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import HubspotFreeQuoteForm from '../HubspotFreeQuoteForm'
import LoaderSpinner from 'main_app/components/LoaderSpinner'
import classes from './styles.module.scss'

function FreeQuoteForm ({
  formOrigin,
  onSuccess
}) {
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmitFinished = useCallback(async values => {
    try {
      setIsLoading(true)
      await window.fetch(INITIAL_LANDING_FORM_PROCESSOR_URL, {
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
      onSuccess?.()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [formOrigin, onSuccess])

  const onLoadingStateChange = useCallback(isLoading => {
    setIsLoading(isLoading)
  }, [])

  return (
    <>
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
