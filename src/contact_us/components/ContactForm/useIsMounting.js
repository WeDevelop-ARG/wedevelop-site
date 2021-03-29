import { useEffect, useRef } from 'react'

function useIsMounting () {
  const isMountingRef = useRef(true)
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (!isFirstRender.current) {
      isMountingRef.current = false
    } else {
      isFirstRender.current = false
    }
  })

  return isMountingRef
}

export default useIsMounting
