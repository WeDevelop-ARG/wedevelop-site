import { useEffect, useRef } from 'react'
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

function ClutchWidget ({ className, variant = 'light', height, verticalAlign, horizontalAlign, onLoad }) {
  const containerRef = useRef()
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

  useEffect(() => {
    let container = containerRef.current
    let iframe
    const rescaleContainer = ({ isLoad } = {}) => {
      if (iframe && typeof height === 'number') {
        const scale = height / container.offsetHeight
        let transform = `scale(${scale})`

        if (horizontalAlign === 'center') {
          transform = `translateX(-${(187 / 2) * scale}px) ${transform}`
        }

        container.style.transform = transform
      }

      if (isLoad && isFunction(onLoad)) {
        try {
          let loadCalled = false
          let timeout
          const callLoad = () => {
            if (loadCalled) return undefined
            loadCalled = true
            clearTimeout(timeout)
            iframe.removeEventListener('load', callLoad)
            onLoad()
          }
          iframe.addEventListener('load', callLoad)
          timeout = setTimeout(callLoad, 3000)
        } catch (e) {}
      }
    }
    const iframeObserver = new MutationObserver(rescaleContainer)

    const handleIframe = () => {
      let isLoad = !iframe

      iframe = container.querySelector('iframe')
      isLoad = isLoad && iframe

      if (iframe) {
        iframeObserver.observe(iframe, {
          attributeFilter: ['style']
        })
      }

      rescaleContainer({ isLoad })
    }

    handleIframe()

    const containerObserver = new MutationObserver(handleIframe)

    containerObserver.observe(container, {
      childList: true
    })

    return () => {
      container.style.transform = ''
      iframeObserver.disconnect()
      containerObserver.disconnect()
    }
  }, [height, onLoad, horizontalAlign])

  return (
    <div
      ref={containerRef}
      className={classnames('clutch-widget', className)}
      style={{
        height: 'fit-content',
        display: 'inline-block',
        transformOrigin: `0 ${verticalAlign === 'center' ? '50%' : 0}`,
        transformBox: 'fill-box',
        left: `${horizontalAlign === 'center' && typeof height === 'number' ? 50 : 0}%`,
        position: horizontalAlign === 'center' && typeof height === 'number' ? 'relative' : undefined
      }}
      data-url='https://widget.clutch.co'
      data-widget-type='2'
      data-expandifr='true'
      data-clutchcompany-id='810049'
      data-primary-color='#FFC331'
      {...extraProps}
    />
  )
}

export default ClutchWidget
