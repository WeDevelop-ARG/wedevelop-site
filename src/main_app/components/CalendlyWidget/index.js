import { useCallback, useMemo } from 'react'
import { CalendlyEventListener, InlineWidget } from 'react-calendly'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import useMediaQuery from 'utils/use_media_query'

function CalendlyWidget ({ sourcePage }) {
  const isTablet = useMediaQuery('screen and (min-width: 725px)')
  const isDesktop = useMediaQuery('screen and (min-width: 1250px)')
  const height = useMemo(() => {
    if (isDesktop) return '646px'
    else if (isTablet) return '1087px'
    else return '1069px'
  }, [isTablet, isDesktop])
  const utmValues = useMemo(() => {
    if (!sourcePage) return {}

    return {
      utm_source: 'wedevelop',
      utm_medium: 'website',
      utm_campaign: sourcePage
    }
  }, [sourcePage])
  const handleScheduledEvent = useCallback((e) => {
    logAnalyticsEvent({
      event: 'generate_lead',
      eventAction: 'schedule_meeting',
      eventLabel: 'calendly',
      ...utmValues
    })
  }, [utmValues])

  return (
    <>
      <CalendlyEventListener onEventScheduled={handleScheduledEvent}>
        <InlineWidget
          url='https://calendly.com/wedevelop/meet-us'
          styles={{ position: 'relative', minWidth: '320px', height }}
        />
      </CalendlyEventListener>
      <p>or email us at <a href='mailto:info@wedevelop.me'>info@wedevelop.me</a></p>
    </>
  )
}

export default CalendlyWidget
