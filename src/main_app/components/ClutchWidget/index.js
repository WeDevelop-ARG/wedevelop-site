import { useEffect } from 'react'
import classnames from 'classnames'
import isFunction from 'lodash/isFunction'
import { IS_STATIC_RENDERER } from 'main_app/constants'

const CLUTCH_URL = 'https://widget.clutch.co/static/js/widget.js'

function loadClutch (onPossiblyLoaded) {
  if (IS_STATIC_RENDERER) return undefined

  if (isClutchScriptPresent()) {
    return onPossiblyLoaded()
  }

  const sc = document.createElement('script')

  sc.src = CLUTCH_URL
  sc.async = true
  sc.defer = true

  sc.addEventListener('load', () => {
    onPossiblyLoaded()
  })

  setTimeout(function () {
    if (isClutchScriptPresent()) {
      onPossiblyLoaded()
    }
    document.head.appendChild(sc)
  }, 1500)
}

function isClutchScriptPresent () {
  return document.head.querySelector(`script[src="${CLUTCH_URL}"]`) !== null
}

function ClutchWidget ({ className, variant = 'light', width = 192, height = 45 }) {
  const extraProps = {}

  if (variant === 'light') {
    extraProps['data-darkbg'] = true
  }

  useEffect(() => {
    let initialized = false
    loadClutch(() => {
      if (!initialized && isFunction(window.CLUTCHCO?.Init)) {
        initialized = true
        window.CLUTCHCO.Init()
      }
    })
  }, [])

  return (
    <div
      className={classnames('clutch-widget', className)}
      data-url='https://widget.clutch.co'
      data-widget-type='2'
      data-height={height.toString()}
      style={{ width: `${width}px`, height: `${height}px` }}
      data-clutchcompany-id='810049'
      data-primary-color='#FFC331'
      {...extraProps}
    />
  )
}

export default ClutchWidget
