import { useCallback, useMemo } from 'react'
import { CalendlyEventListener, InlineWidget } from 'react-calendly'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import useMediaQuery from 'utils/use_media_query'
import { CALENDLY_DEFAULT_EVENT_URL, PROCESS_CALENDLY_EVENT_INVITEE_ENDPOINT_URL } from 'main_app/constants'

function CalendlyWidget ({ sourcePage, hideText, followUpTracingId, onFinish, prefill }) {
  const isTablet = useMediaQuery('screen and (min-width: 725px)')
  const isDesktop = useMediaQuery('screen and (min-width: 1250px)')
  const height = useMemo(() => {
    if (isDesktop) return '620px'
    else if (isTablet) return '1087px'
    else return '1069px'
  }, [isTablet, isDesktop])
  const utmValues = useMemo(() => {
    if (!sourcePage) return {}

    return {
      utmSource: (new URL(window.location.href)).hostname,
      utmMedium: 'calendly_widget',
      utmCampaign: sourcePage
    }
  }, [sourcePage])
  const handleScheduledEvent = useCallback(async (e) => {
    const calendlyInviteeURI = e.data.payload.invitee.uri
    const calendlyEventURI = e.data.payload.event.uri
    logAnalyticsEvent({
      event: 'contact',
      contactType: 'calendly',
      contactSource: sourcePage
    })
    // LinkedIn Ad Conversion Event
    try{window?.lintrk?.('track', { conversion_id: 6505732 })}catch(e){}
    try {
      await window.fetch(PROCESS_CALENDLY_EVENT_INVITEE_ENDPOINT_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ calendlyInviteeURI, calendlyEventURI, followUpTracingId })
      })
      onFinish()
    } catch (err) {
      console.error(err)
    }
  }, [sourcePage, followUpTracingId, onFinish])

  return (
    <>
      <CalendlyEventListener onEventScheduled={handleScheduledEvent}>
        <InlineWidget
          utm={utmValues}
          url={CALENDLY_DEFAULT_EVENT_URL}
          styles={{ position: 'relative', minWidth: '280px', height }}
          prefill={prefill}
        />
      </CalendlyEventListener>
      {!hideText && <p>or email us at <a href='mailto:info@wedevelop.me'>info@wedevelop.me</a></p>}
    </>
  )
}

export default CalendlyWidget
