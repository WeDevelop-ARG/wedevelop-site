import { useMemo } from 'react'

import usePageTitle from './use_page_title'
import usePageMetaContent from './use_page_meta_content'
import { BASE_URL } from 'main_app/constants'
import { useDeveloperMetadataHints } from './developer_hints'

let pageTitleSuffix = ''
let pageTitlePrefix = ''

function usePageMetadata ({
  url = BASE_URL,
  title,
  description,
  imagePath = undefined,
  imageURL,
  noindex = false
}) {
  useDeveloperMetadataHints({ url, title, description, imagePath })

  imageURL = useMemo(() => (
    imageURL || (imagePath && (new URL(imagePath, url)).href)
  ), [url, imagePath, imageURL])
  const domain = useMemo(() => (
    (new URL(url)).hostname
  ), [url])
  title = useMemo(() => buildPageTitle(title), [title])

  usePageTitle(title)
  usePageMetaContent({ name: 'description', content: description })

  usePageMetaContent({ property: 'og:url', content: url })
  usePageMetaContent({ property: 'og:title', content: title })
  usePageMetaContent({ property: 'og:description', content: description })
  usePageMetaContent({ property: 'og:image', content: imageURL })

  usePageMetaContent({ property: 'twitter:domain', content: domain })
  usePageMetaContent({ property: 'twitter:url', content: url })
  usePageMetaContent({ name: 'twitter:title', content: title })
  usePageMetaContent({ name: 'twitter:description', content: description })
  usePageMetaContent({ name: 'twitter:image', content: imageURL })

  const metaRobots = noindex ? { name: 'robots', content: 'noindex' } : {}
  usePageMetaContent(metaRobots)
}

function setPageTitleSuffix (suffix) {
  pageTitleSuffix = suffix
}

function setPageTitlePrefix (prefix) {
  pageTitlePrefix = prefix
}

function buildPageTitle (title) {
  return `${pageTitlePrefix}${title}${pageTitleSuffix}`
}

export {
  usePageMetadata as default,
  setPageTitlePrefix,
  setPageTitleSuffix
}
