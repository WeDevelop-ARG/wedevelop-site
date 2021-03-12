import { useRef, useEffect, useMemo, useState } from 'react'
import classnames from 'classnames'
import { isEmpty } from 'lodash'

import { ENVIRONMENT } from 'main_app/constants'

import classes from './styles.module.scss'

const assetsSVG = new Map()
const sizeCache = new Map()
;(() => {
  const r = require.context('assets', true, /\.svg$/)
  r.keys().forEach((key) => (assetsSVG.set(key, r(key).default)))
})()
let uniqueIconId = 0

function getSVGBBoxSize (href) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use')

  use.setAttribute('href', href)
  svg.setAttribute('aria-hidden', 'true')
  svg.setAttribute('width', '0')
  svg.setAttribute('height', '0')
  svg.appendChild(use)
  svg.style.position = 'absolute'
  svg.style.top = '-99999px'
  svg.style.left = '-99999px'
  svg.style.visibility = 'hidden'

  return new Promise((resolve, reject) => {
    let timeout = null
    const handleLoad = () => {
      clearTimeout(timeout)
      resolve(getSVGElementSize(svg))
    }
    const handleError = () => {
      clearTimeout(timeout)
      reject(new Error('Could not load SVG'))
    }

    if (getSVGElementSize(svg)) {
      handleLoad()

      return undefined
    }

    document.body.appendChild(svg)
    svg.addEventListener('load', handleLoad)
    svg.addEventListener('error', handleError)
    timeout = setTimeout(() => {
      svg.removeEventListener('load', handleLoad)
      svg.removeEventListener('error', handleError)
      handleError()
    }, 10000)
  }).finally(() => {
    document.body.removeChild(svg)
  })
}

function getSVGElementSize (svg) {
  const bbox = svg.getBBox()
  const width = bbox.x + bbox.width + bbox.x
  const height = bbox.y + bbox.height + bbox.y

  if (width && height) return { width, height }
}

function SVGIcon ({ name, title, description, className, variant = 'full', ...props }) {
  const [uniqueId] = useState(() => uniqueIconId++)
  const svgRef = useRef()
  const src = useMemo(() => assetsSVG.get(`./${name}.svg`), [name])
  const href = `${src}#${variant}`
  const [sizeFromCache, setSizeFromCache] = useState(() => sizeCache.get(href))

  useEffect(() => {
    if (!svgRef.current) return undefined
    if (sizeFromCache?.width && sizeFromCache?.height) {
      return undefined
    }

    let sizesPromise = sizeFromCache
    let cleanUpExecuted = false

    if (!sizesPromise) {
      sizesPromise = getSVGBBoxSize(href)
      sizeCache.set(href, sizesPromise)
    }

    sizesPromise.then(({ width, height }) => {
      sizeCache.set(href, { width, height })
      setSizeFromCache({ width, height })

      if (cleanUpExecuted) return undefined

      svgRef.current.setAttribute('width', width)
      svgRef.current.setAttribute('height', height)
      svgRef.current.setAttribute('viewBox', `0 0 ${width} ${height}`)
    }).catch((err) => {
      sizeCache.set(href, undefined)
      console.error(err)
    })

    return () => {
      cleanUpExecuted = true
    }
  }, [href, sizeFromCache])

  if (!src) {
    if (ENVIRONMENT !== 'production') {
      console.error('SVG Icon not found:', name)
    }

    return null
  }

  const role = !isEmpty(title) || !isEmpty(description) ? 'img' : 'presentational'
  const baseId = `__SVGIcon__${name}-${uniqueId}`
  const titleId = `${baseId}-title`
  const descriptionId = `${baseId}-description`
  let labelledBy = ''

  if (!isEmpty(title)) labelledBy += titleId + ' '
  if (!isEmpty(description)) labelledBy += descriptionId

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      ref={svgRef}
      className={classnames(classes.default, className)}
      width={sizeFromCache?.width ?? '0'}
      height={sizeFromCache?.height ?? '0'}
      role={role}
      aria-labelledby={isEmpty(labelledBy) ? undefined : labelledBy}
      {...props}
    >
      {!isEmpty(title) && (
        <title id={titleId}>
          {title}
        </title>
      )}
      {!isEmpty(description) && (
        <desc id={descriptionId}>
          {description}
        </desc>
      )}
      <use href={href} />
    </svg>
  )
}

export default SVGIcon
