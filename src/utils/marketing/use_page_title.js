import { useEffect } from 'react'

function usePageTitle (title) {
  useEffect(() => {
    const previousTitle = document.title

    document.title = title

    return () => {
      document.title = previousTitle
    }
  }, [title])
}

export {
  usePageTitle as default
}
