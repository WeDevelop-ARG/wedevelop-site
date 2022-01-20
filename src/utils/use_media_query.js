import { useEffect, useState } from 'react'

import useComponentDidMount from './use_component_did_mount'

function useMediaQuery (mediaQuery) {
  const didMount = useComponentDidMount()
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (!didMount) return undefined

    const match = window.matchMedia(mediaQuery)
    const listener = ({ matches }) => setMatches(matches)

    setMatches(match.matches)
    match.addListener(listener)

    return () => match.removeListener(listener)
  }, [mediaQuery, didMount])

  return matches
}

export default useMediaQuery
