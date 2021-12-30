import { isUndefined } from 'lodash'
import { useEffect } from 'react'

const config = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true
}

function useMutationObserver(
  ref,
  callback,
  options = config
) {
  useEffect(() => {
    if (!isUndefined(ref.current)) {
      const observer = new MutationObserver(callback)

      observer.observe(ref.current, options)

      return () => {
        observer.disconnect()
      };
    }
  }, [callback, options, ref])
}

export { useMutationObserver }