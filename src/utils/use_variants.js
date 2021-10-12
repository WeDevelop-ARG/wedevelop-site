import { useMemo } from 'react'
import classnames from 'classnames'
import isFunction from 'lodash/isFunction'
import uniq from 'lodash/uniq'

function useVariants (classes, variants = '', { prefix = '', defaults = {} } = {}) {
  if (Array.isArray(variants)) {
    variants = [...variants]
  } else {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    variants = variants.split(' ')
  }

  return useMemo(() => {
    Object.entries(defaults).forEach(([key, shouldAdd]) => {
      if (isFunction(shouldAdd)) shouldAdd = shouldAdd(variants)
      if (shouldAdd) variants.push(key)
    })

    const variantClasses = {}

    for (let variant of variants) {
      variant = `${prefix}${variant}`
      const className = classes[variant]
      variantClasses[className] = className
    }

    return classnames(variantClasses)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes, variants.toString()])
}

function combineVariants (...variants) {
  let result = []

  for (let variant of variants) {
    if (!Array.isArray(variant)) {
      variant = [variant]
    }

    result = result.concat(variant)
  }

  return uniq(result)
}

function isVariant (variants, variant) {
  if (!Array.isArray(variants)) {
    variants = [variants]
  }
  return variants.includes(variant)
}

export {
  useVariants as default,
  combineVariants,
  isVariant
}
