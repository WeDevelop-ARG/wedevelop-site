import { useRef, useEffect, useMemo, useState } from 'react'
import classnames from 'classnames'
import isEmpty from 'lodash/isEmpty'

import { ENVIRONMENT } from 'main_app/constants'

import classes from './styles.module.scss'
import Image from 'next/image'

const assetsSVG = new Map()
const sizeCache = new Map()
;(() => {
  const r = require.context('assets', true, /\.svg$/)
  r.keys().forEach((key) => (assetsSVG.set(key, r(key).default)))
})()
let uniqueIconId = 0


function SVGIcon ({ name, title, description, className, variant = 'full', ...props }) {
  
  const src = useMemo(() => assetsSVG.get(`./${name}.svg`), [name])
  return (
    <Image
      alt={title+' '+description} 
      src={src}
      className={classnames(classes.default, className)}
      {...props}
    />
  )
}

export default SVGIcon
