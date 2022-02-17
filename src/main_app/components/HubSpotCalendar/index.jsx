import { useEffect, useCallback } from 'react'
import { IS_STATIC_RENDERER } from 'main_app/constants'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

const SCRIPT_URL = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'

function loadScript (onPossiblyLoaded) {
  if (IS_STATIC_RENDERER) return undefined

  if (isScriptPresent()) removeScript()

  const sc = document.createElement('script')

  sc.src = SCRIPT_URL
  sc.async = true
  sc.defer = true

  sc.addEventListener('load', () => {
    onPossiblyLoaded()
  })

  document.head.appendChild(sc)
}

function isScriptPresent () {
  return document.head.querySelector(`script[src="${SCRIPT_URL}"]`) !== null
}

function removeScript () {
  document.head.removeChild(
    document.head.querySelector(`script[src="${SCRIPT_URL}"]`)
  )
}

export default function HubSpotCalendar ({ sourcePage, onFinish, hideText }) {
  const handleScheduledEvent = useCallback(async (e) => {
    if (e.origin !== 'https://meetings.hubspot.com') return undefined
    if (!e.data?.meetingBookSucceeded === true) return undefined

    logAnalyticsEvent({
      event: 'contact',
      contactType: 'schedule_meeting',
      contactSource: sourcePage
    })
    // LinkedIn Ad Conversion Event
    try{window?.lintrk?.('track', { conversion_id: 6505732 })}catch(e){}
    try {
      onFinish()
    } catch (err) {
      console.error(err)
    }
  }, [sourcePage, onFinish])

  useEffect(() => {
    window.addEventListener('message', handleScheduledEvent)

    return () => window.removeEventListener('message', handleScheduledEvent)
  }, [handleScheduledEvent])

  useEffect(() => {
    let initialized = false
    loadScript(() => {
      if (!initialized) {
        initialized = true
      }
    })
  }, [])

  return (
    <>
      <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/abel-osorio/15-minute-free-consultation?embed=true" />
      {!hideText && <p>or email us at <a href='mailto:info@wedevelop.me'>info@wedevelop.me</a></p>}
    </>
  )
}
