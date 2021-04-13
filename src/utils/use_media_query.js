import { useEffect, useState } from 'react'

import { IS_STATIC_RENDERER } from 'main_app/constants'

import useComponentDidMount from './use_component_did_mount'

function useMediaQuery (mediaQuery) {
  const didMount = useComponentDidMount()
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (IS_STATIC_RENDERER || !didMount) return undefined

    const match = window.matchMedia(mediaQuery)
    const listener = ({ matches }) => setMatches(matches)

    setMatches(match.matches)
    match.addListener(listener)

    return () => match.removeListener(listener)
  }, [mediaQuery, didMount])

  return matches
}

export default useMediaQuery
