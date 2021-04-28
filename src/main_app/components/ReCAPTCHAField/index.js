import { useEffect, useRef, useState } from 'react'
import { useFormikContext } from 'formik'
import { RECAPTCHA_SITE_KEY } from 'main_app/constants'

function ReCAPTCHAField ({ name, className }) {
  const containerRef = useRef()
  const widgetIdRef = useRef()
  const { setFieldValue, setTouched, values } = useFormikContext()
  const [grecaptcha, setGrecaptcha] = useState()
  const value = values[name]

  useEffect(() => {
    let interval = null
    let timeout = null
    const tryFindReCAPTCHA = () => {
      if (window.grecaptcha) {
        setGrecaptcha(window.grecaptcha)
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }

    interval = setInterval(tryFindReCAPTCHA, 500)
    timeout = setTimeout(() => {
      clearInterval(interval)
      console.error('Could not find ReCAPTCHA in the global scope')
    }, 10000)
    tryFindReCAPTCHA()
  }, [])

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
