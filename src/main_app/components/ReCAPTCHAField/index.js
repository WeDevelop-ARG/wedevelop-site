import { useEffect, useRef, useState } from 'react'
import { useFormikContext } from 'formik'
import { RECAPTCHA_SITE_KEY } from 'main_app/constants'
import { isFunction } from 'lodash'
import { useMemo } from 'react'

const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api.js?onload=RECAPTCHA_LOAD_HANDLER&render=explicit'

let recaptchaLoadListeners = []

window.RECAPTCHA_LOAD_HANDLER = () => {
  recaptchaLoadListeners.forEach(l => l())
}

function loadRecaptcha (onPossiblyLoaded) {
  recaptchaLoadListeners.push(onPossiblyLoaded)

  if (isRecaptchaScriptPresent()) {
    return onPossiblyLoaded()
  }

  var sc = document.createElement('script')

  sc.src = RECAPTCHA_URL
  sc.async = true
  sc.defer = true

  sc.addEventListener('load', () => {
    onPossiblyLoaded()
  })

  setTimeout(function () {
    if (isRecaptchaScriptPresent()) return onPossiblyLoaded()
    document.head.appendChild(sc)
  }, 3000)
}

function isRecaptchaScriptPresent () {
  return document.head.querySelector(`script[src="${RECAPTCHA_URL}"]`) !== null
}

function ReCAPTCHAField ({ name, className }) {
  const containerRef = useRef()
  const widgetIdRef = useRef()
  const { setFieldValue, setTouched, values, touched } = useFormikContext()
  const [grecaptcha, setGrecaptcha] = useState()
  const formTouched = useMemo(() => Object.values(touched).some(v => v === true), [touched])
  const value = values[name]

  useEffect(() => {
    if (!formTouched && !isFunction(window.grecaptcha?.render)) {
      return undefined
    }

    let initialized = false
    loadRecaptcha(() => {
      if (!initialized && isFunction(window.grecaptcha?.render)) {
        initialized = true
        setGrecaptcha(window.grecaptcha)
      }
    })
  }, [formTouched])

  useEffect(() => {
    if (!value && widgetIdRef.current) {
      grecaptcha?.reset(widgetIdRef.current)
    }
  }, [grecaptcha, name, value])

  useEffect(() => {
    const containerRefCurrent = containerRef.current
    widgetIdRef.current = grecaptcha?.render(containerRef.current, {
      sitekey: RECAPTCHA_SITE_KEY,
      callback: token => {
        if (!token) return undefined
        setFieldValue(name, token)
        setTouched({ [name]: true })
      }
    })

    return () => {
      grecaptcha?.reset(widgetIdRef.current)
      widgetIdRef.current = null
      while (containerRefCurrent.firstChild) {
        containerRefCurrent.removeChild(
          containerRefCurrent.firstChild
        )
      }
    }
  }, [grecaptcha, name, setFieldValue, setTouched])

  return <div ref={containerRef} className={className} />
}

export default ReCAPTCHAField
