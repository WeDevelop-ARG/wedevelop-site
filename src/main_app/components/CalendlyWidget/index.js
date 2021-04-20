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
      utmSource: (new URL(window.location.href)).hostname,
      utmMedium: 'calendly_widget',
      utmCampaign: sourcePage
    }
  }, [sourcePage])
  const handleScheduledEvent = useCallback((e) => {
    logAnalyticsEvent({
      event: 'contact',
      contactType: 'calendly',
      contactSource: sourcePage
    })
  }, [sourcePage])

  return (
    <>
      <CalendlyEventListener onEventScheduled={handleScheduledEvent}>
        <InlineWidget
          utm={utmValues}
          url='https://calendly.com/wedevelop/meet-us'
          styles={{ position: 'relative', minWidth: '320px', height }}
        />
      </CalendlyEventListener>
      <p>or email us at <a href='mailto:info@wedevelop.me'>info@wedevelop.me</a></p>
    </>
  )
}

export default CalendlyWidget
