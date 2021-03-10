import { isFunction } from 'lodash'
import { useCallback } from 'react'

function useCombinedRefs (...refs) {
  return useCallback(element => {
    for (const ref of refs) {
      if (isFunction(ref)) ref(element)
      else ref.current = element
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useCombinedRefs
