import { useMemo } from 'react'
import Head from 'next/head'

import { BASE_URL } from 'main_app/constants'
import { useDeveloperMetadataHints } from './developer_hints'

let pageTitleSuffix = ''
let pageTitlePrefix = ''

function PageMetadata ({
  url = BASE_URL,
  title,
  description,
  imagePath = undefined,
  imageURL
}) {
  useDeveloperMetadataHints({ url, title, description, imagePath })

  imageURL = useMemo(() => (
    imageURL || (imagePath && (new URL(imagePath, url)).href)
  ), [url, imagePath, imageURL])
  const domain = useMemo(() => (
    (new URL(url)).hostname
  ), [url])
  title = useMemo(() => buildPageTitle(title), [title])

  return (
    <Head>
      <title>{title}</title>

      {description && <meta name='description' content={description} />}
      {description && <meta property='description' content={description} />}

      {url && <meta property='og:url' content={url} />}
      {title && <meta property='og:title' content={title} />}
      {description && <meta property='og:description' content={description} />}
      {imageURL && <meta property='og:image' content={imageURL} />}

      {domain && <meta property='twitter:domain' content={domain} />}
      {url && <meta property='twitter:url' content={url} />}
      {title && <meta name='twitter:title' content={title} />}
      {description && <meta name='twitter:description' content={description} />}
      {imageURL && <meta name='twitter:image' content={imageURL} />}
    </Head>
  )
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
  PageMetadata as default,
  setPageTitlePrefix,
  setPageTitleSuffix
}
