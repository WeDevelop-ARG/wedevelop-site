import { useMemo, useCallback } from 'react'
import { CalendlyEventListener, InlineWidget } from 'react-calendly'
import axios from 'axios'

import useMediaQuery from 'utils/use_media_query'
import { PROCESS_CALENDLY_EVENT_INVITEE_ENDPOINT_URL } from 'main_app/constants'

function CalendlyWidget () {
  const handleScheduledEvent = useCallback(async ({ data }) => {
    const calendlyInviteeURI = data.payload.invitee.uri
    try {
      await axios.post(PROCESS_CALENDLY_EVENT_INVITEE_ENDPOINT_URL, { calendlyInviteeURI })
    } catch (err) {
      console.error(err)
    }
  }, [])
  const isTablet = useMediaQuery('screen and (min-width: 725px)')
  const isDesktop = useMediaQuery('screen and (min-width: 1250px)')
  const height = useMemo(() => {
    if (isDesktop) return '646px'
    else if (isTablet) return '1087px'
    else return '1069px'
  }, [isTablet, isDesktop])
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
