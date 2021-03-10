import { useEffect } from "react"

let pageTitleSuffix = ''

function usePageTitle (title) {
  useEffect(() => {
    const previousTitle = document.title

    document.title = `${title}${pageTitleSuffix}`

    return () => {
      document.title = previousTitle
    }
  }, [])
}

function setPageTitleSuffix (suffix) {
  pageTitleSuffix = suffix
}

export {
  usePageTitle as default,
  setPageTitleSuffix
}
