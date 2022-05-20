import identity from 'lodash/identity'
import { useEffect, useMemo } from 'react'

function useElementClass (element, classOrClasses) {
  classOrClasses = useMemo(() => {
    if (!Array.isArray(classOrClasses)) {
      return classOrClasses.split(' ').filter(identity)
    }

    return classOrClasses

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classOrClasses.toString()])

  const setClasses = () => {
    for (const class_ of classOrClasses) {
      element?.classList.add(class_)
    }

    return () => {
      for (const class_ of classOrClasses) {
        element?.classList.remove(class_)
      }
    }
  }

  if (typeof window === 'undefined') {
    setClasses()
  }

  useEffect(setClasses, [element, classOrClasses])
}

export default useElementClass
