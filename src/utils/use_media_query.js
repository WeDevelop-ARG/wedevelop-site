import { useEffect, useState } from 'react'

function useMediaQuery (mediaQuery) {
  const [matches, setMatches] = useState()

  useEffect(() => {
    const match = window.matchMedia(mediaQuery)
    const listener = ({ matches }) => setMatches(matches)

    setMatches(match.matches)
    match.addListener(listener)

    return () => match.removeListener(listener)
  }, [mediaQuery])

  return matches
}

export default useMediaQuery
