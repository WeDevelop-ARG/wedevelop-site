import isFunction from 'lodash/isFunction'
import { useCallback } from 'react'

function useCombinedRefs (...refs) {
  return useCallback(element => {
    for (const ref of refs) {
      if (isFunction(ref)) ref(element)
      else if (ref) ref.current = element
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs)
}

export default useCombinedRefs
