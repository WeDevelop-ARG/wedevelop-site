import { useMemo } from 'react'
import classnames from 'classnames'

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

export default useVariants
