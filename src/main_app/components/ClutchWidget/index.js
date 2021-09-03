import { useEffect } from 'react'
import classnames from 'classnames'
import { isFunction } from 'lodash'

let script

function ClutchWidget ({ className, variant = 'light' }) {
  const extraProps = {}

  if (variant === 'light') {
    extraProps['data-darkbg'] = true
  }

  useEffect(() => {
    if (script && isFunction(window.CLUTCHCO?.Init)) {
      window.CLUTCHCO.Init()
    } else {
      script = document.createElement('script')

      script.src = 'https://widget.clutch.co/static/js/widget.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div
      className={classnames('clutch-widget', className)}
      data-url='https://widget.clutch.co'
      data-widget-type='2'
      data-height='45'
      style={{ width: '192px', height: '45px' }}
      data-clutchcompany-id='810049'
      data-primary-color='#FFC331'
      {...extraProps}
    />
  )
}

export default ClutchWidget
