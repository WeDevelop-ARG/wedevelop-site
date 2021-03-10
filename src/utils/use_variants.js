import { useMemo } from 'react'
import classnames from 'classnames'
import { uniq } from 'lodash'

function useVariants (classes, variants, { prefix = '' } = {}) {
  return useMemo(() => {
    if (!Array.isArray(variants)) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      variants = [variants]
    }

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

export {
  useVariants as default,
  combineVariants
}
