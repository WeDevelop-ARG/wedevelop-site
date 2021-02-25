import { useEffect } from 'react'
import classnames from 'classnames'

let script

function ClutchWidget ({ className }) {
  useEffect(() => {
    if (script) {
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
      data-height='50'
      data-clutchcompany-id='810049'
    />
  )
}

export default ClutchWidget
