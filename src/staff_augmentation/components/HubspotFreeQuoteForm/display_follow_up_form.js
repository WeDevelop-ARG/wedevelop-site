import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import { INITIAL_LANDING_FORM_PROCESSOR_URL } from 'main_app/constants'

export async function displayFollowUpForm (values, handleSubmitFinished, formOrigin) {
  let tracingId
  try {
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
    const responseJSON = await response.json()
    tracingId = responseJSON.tracingId
  } catch (error) {
    console.log(error)
  }
  handleSubmitFinished(tracingId)
}
