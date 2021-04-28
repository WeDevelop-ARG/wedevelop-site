import { useEffect, useRef } from 'react'
import { useFormikContext } from 'formik'
import { RECAPTCHA_SITE_KEY } from 'main_app/constants'

function ReCAPTCHAField ({ name, className }) {
  const containerRef = useRef()
  const widgetIdRef = useRef()
  const { setFieldValue, setTouched, values } = useFormikContext()
  useEffect(() => {
    if (!values[name] && widgetIdRef.current) {
      window.grecaptcha?.reset(widgetIdRef.current)
    }
  }, [name, values[name]])
  useEffect(() => {
    widgetIdRef.current = window.grecaptcha?.render(containerRef.current, {
      sitekey: RECAPTCHA_SITE_KEY,
      callback: token => {
        if (!token) return undefined
        setFieldValue(name, token)
        setTouched({ [name]: true })
      }
    }
    )
    return () => {
      window.grecaptcha?.reset(widgetIdRef.current)
      widgetIdRef.current = null
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(
          containerRef.current.firstChild
        )
      }
    }
  }, [name, setFieldValue, setTouched])
  return <div ref={containerRef} className={className} />
}

export default ReCAPTCHAField
