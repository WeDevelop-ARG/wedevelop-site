import { useEffect, useRef } from 'react'
import isFunction from 'lodash/isFunction'

const HUBSPOT_URL = 'https://js.hsforms.net/forms/embed/v2.js'

function loadHubSpot (onPossiblyLoaded) {
  if (isHubSpotScriptPresent()) {
    return onPossiblyLoaded()
  }

  const hubspotScript = document.createElement('script')

  hubspotScript.src = HUBSPOT_URL
  hubspotScript.async = true
  hubspotScript.defer = true

  hubspotScript.addEventListener('load', () => {
    onPossiblyLoaded()
  })

  setTimeout(function () {
    if (isHubSpotScriptPresent()) {
      onPossiblyLoaded()
    }
    document.head.appendChild(hubspotScript)
  }, 1500)
}

function isHubSpotScriptPresent () {
  return document.head.querySelector(`script[src="${HUBSPOT_URL}"]`) !== null
}

let counter = 0

function HubspotTopEngineersForm ({ region, portalId, formId, onSubmit, onLoadingStateChange }) {
  const containerRef = useRef()
  useEffect(() => {
    const container = containerRef.current

    loadHubSpot(() => {
      if (!isFunction(window.hbspt?.forms?.create)) return undefined

      onLoadingStateChange?.(true)

      const id = `hr-home-hubspot-top-engineers-form-${counter++}`

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
            firstname: $form.find('textarea[name="firstname"]').val(),
            lastname: $form.find('textarea[name="lastname"]').val(),
            email: $form.find('input[name="email"]').val(),
            skills: $form.find('textarea[name="skills"]').val()
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

export default HubspotTopEngineersForm
