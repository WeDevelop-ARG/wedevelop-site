import { useMemo } from 'react'
import { CalendlyEventListener, InlineWidget } from 'react-calendly'

import useMediaQuery from 'utils/use_media_query'

function CalendlyWidget () {
  const isTablet = useMediaQuery('screen and (min-width: 725px)')
  const isDesktop = useMediaQuery('screen and (min-width: 1250px)')
  const height = useMemo(() => {
    if (isDesktop) return '646px'
    else if (isTablet) return '1087px'
    else return '1069px'
  }, [isTablet, isDesktop])
  return (
    <>
      <CalendlyEventListener onEventScheduled={console.log}>
        <InlineWidget
          url='https://calendly.com/wedevelop/meet-us'
          styles={{ position: 'relative', minWidth: '280px', height }}
        />
      </CalendlyEventListener>
      <p>or email us at <a href='mailto:info@wedevelop.me'>info@wedevelop.me</a></p>
    </>
  )
}

export default CalendlyWidget
