import { useEffect, useRef } from 'react'
import isFunction from 'lodash/isFunction'

const HUBSPOT_URL = 'https://js.hsforms.net/forms/shell.js'
const JQUERY_URL = 'https://code.jquery.com/jquery-3.6.0.min.js'

function loadHubSpot (onPossiblyLoaded) {
  if (isHubSpotScriptPresent()) {
    return onPossiblyLoaded()
  }

  const hubspotScript = document.createElement('script')

  hubspotScript.src = HUBSPOT_URL
  hubspotScript.async = true
  hubspotScript.defer = true

  const jqueryScript = document.createElement('script')

  jqueryScript.src = JQUERY_URL
  jqueryScript.async = true
  jqueryScript.defer = true

  hubspotScript.addEventListener('load', () => {
    onPossiblyLoaded()
  })

  setTimeout(function () {
    if (isHubSpotScriptPresent()) {
      onPossiblyLoaded()
    }
    document.head.appendChild(hubspotScript)
    document.head.appendChild(jqueryScript)
  }, 1500)
}

function isHubSpotScriptPresent () {
  return document.head.querySelector(`script[src="${HUBSPOT_URL}"]`) !== null
}

let counter = 0

function HubspotFreeQuoteForm ({ region, portalId, formId, onSubmit, onLoadingStateChange }) {
  const containerRef = useRef()
  useEffect(() => {
    const container = containerRef.current

    loadHubSpot(() => {
      if (!isFunction(window.hbspt?.forms?.create)) return undefined

      onLoadingStateChange?.(true)

      const id = `hr-landing-hubspot-free-quote-form-${counter++}`

      container.id = id

      let values
      window.hbspt.forms.create({
        region,
        portalId,
        formId,
        target: `#${id}`,
        inlineMessage: 'Thank you for getting in touch! We\'ll contact you soon',
        onFormReady: () => {
          onLoadingStateChange?.(false)
        },
        onFormSubmit: $form => {
          values = {
            name: $form.find('input[name="firstname"]').val(),
            email: $form.find('input[name="email"]').val(),
            message: $form.find('textarea[name="message"]').val()
          }
          onLoadingStateChange?.(true)
        },
        onFormSubmitted: () => {
          onLoadingStateChange?.(false)
          onSubmit?.(values)
        }
      })
    })

    return () => {
      container.id = undefined
      while (container.firstChild) {
        container.removeChild(
          container.firstChild
        )
      }
    }
  }, [onSubmit, region, portalId, formId, onLoadingStateChange])

  return (
    <div ref={containerRef} />
  )
}

export default HubspotFreeQuoteForm
