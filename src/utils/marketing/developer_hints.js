import { isUndefined } from 'lodash'
import { IS_PRODUCTION } from 'main_app/constants'
import { useEffect } from 'react'

let isMetadataSet = false
let setMetadataTimeout = null

export function setupGlobalDeveloperHints () {
  if (IS_PRODUCTION || isUndefined(globalThis.window)) return undefined

  window.addEventListener('popstate', handleNavigation)
  window.history.pushState = (f => function pushState () {
    const ret = f.apply(this, arguments)
    handleNavigation()
    return ret
  })(window.history.pushState)
  window.history.replaceState = (f => function pushState () {
    const ret = f.apply(this, arguments)
    handleNavigation()
    return ret
  })(window.history.replaceState)
  handleNavigation()
}

function handleNavigation () {
  clearTimeout(setMetadataTimeout)
  isMetadataSet = false
  setMetadataTimeout = setTimeout(() => {
    if (!isMetadataSet) {
      console.error('Page Metadata: a page change was detected, but the metadata for the new page was not set.')
    }
  }, 1500)
}

export function useDeveloperMetadataHints ({ url, title, description, imagePath }) {
  if (IS_PRODUCTION) return undefined

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    isMetadataSet = true
  }, [])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!url) printDeveloperHint({ property: 'url' })
    if (!title) printDeveloperHint({ property: 'title' })
    if (!description) printDeveloperHint({ property: 'description' })
    if (!imagePath) printDeveloperHint({ property: 'imagePath', required: false })
  }, [url, title, description, imagePath])
}

function printDeveloperHint ({ property, required = true }) {
  const log = required ? console.error : console.warn
  required = required ? 'required' : 'recommended'
  const message = `Page Metadata: "${property}" is a ${required} property.`

  log(message)
}
