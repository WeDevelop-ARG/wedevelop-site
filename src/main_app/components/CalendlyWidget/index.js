import { useMemo } from 'react'
import { CalendlyEventListener, InlineWidget } from 'react-calendly'

import useMediaQuery from 'utils/use_media_query'

function CalendlyWidget () {
  const isTablet = useMediaQuery('screen and (min-width: 725px)')
  const isDesktop = useMediaQuery('screen and (min-width: 1250px)')
  const height = useMemo(() => {
    if (isTablet) return '916px'
    else if (isDesktop) return '646px'
    else return '842px'
  }, [isTablet, isDesktop])
  return (
    <>
      <CalendlyEventListener onEventScheduled={console.log}>
        <InlineWidget
          url='https://calendly.com/wedevelop/meet-us'
          styles={{ position: 'relative', minWidth: '320px', height }}
        />
      </CalendlyEventListener>
      <p>or email us at <a href='mailto:info@wedevelop.me'>info@wedevelop.me</a></p>
    </>
  )
}

export default CalendlyWidget
