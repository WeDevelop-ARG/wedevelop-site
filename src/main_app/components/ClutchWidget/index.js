import { useEffect, useRef, useCallback, useState } from 'react'
import classNames from 'classnames'
import isFunction from 'lodash/isFunction'
import { IS_STATIC_RENDERER } from 'main_app/constants'
import { useMutationObserver } from 'utils/use_mutation_observer'
import classes from './styles.module.scss'

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
  const widgetRef = useRef()
  const [hasLoaded, setHasLoaded] = useState(false)

  const onMutationObserved = useCallback(() => {
    setHasLoaded(true)
  }, [])

  useMutationObserver(widgetRef, onMutationObserved)

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
      className={classNames(
        'clutch-widget', 
        classes.clutchWidget, 
        { [classes.loaded]: hasLoaded }, 
        className
      )}
      data-url='https://widget.clutch.co'
      data-widget-type='2'
      data-height={height.toString()}
      style={{ width: `${width}px`, height: `${height}px` }}
      data-clutchcompany-id='810049'
      data-primary-color='#FFC331'
      ref={widgetRef}
      {...extraProps}
    />
  )
}

export default ClutchWidget
