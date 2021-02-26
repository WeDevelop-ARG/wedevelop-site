import { useRef, useEffect, useMemo, useState } from 'react'
import classnames from 'classnames'
import { isEmpty } from 'lodash'

import classes from './styles.module.scss'

const assetsSVG = {}
;(() => {
  const r = require.context('assets', true, /\.svg$/)
  r.keys().forEach((key) => (assetsSVG[key] = r(key).default))
})()
let uniqueIconId = 0

function SVGIcon ({ name, title, description, className, variant = 'full', ...props }) {
  const [uniqueId] = useState(() => uniqueIconId++)
  const svgRef = useRef()
  const src = useMemo(() => assetsSVG[`./${name}.svg`], [name])

  useEffect(() => {
    const svg = svgRef.current

    if (!svg) return undefined

    let animationFrame = null
    const startMillis = Date.now()
    const setDimensions = (v) => {
      const bbox = svg.getBBox()
      const width = bbox.x + bbox.width + bbox.x
      const height = bbox.y + bbox.height + bbox.y
      const elapsedMillis = Date.now() - startMillis

      if (!width && !height && elapsedMillis < 2000) {
        animationFrame = window.requestAnimationFrame(setDimensions)
      }

      svg.setAttribute('width', width)
      svg.setAttribute('height', height)
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
    }

    setDimensions()
    svg.addEventListener('load', setDimensions)
    animationFrame = window.requestAnimationFrame(setDimensions)

    return () => {
      svg.removeEventListener('load', setDimensions)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [src, variant])

  if (!src) {
    if (process.env.NODE_ENV !== 'production') {
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
      width='0'
      height='0'
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
      <use href={`${src}#${variant}`} />
    </svg>
  )
}

export default SVGIcon
