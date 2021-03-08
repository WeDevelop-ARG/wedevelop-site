import { useEffect } from 'react'
import { useFormikContext } from 'formik'
import useIsMounting from './useIsMounting'

function SetFormikValue ({ name, value, ignoreOnMount }) {
  const { setFieldValue } = useFormikContext()
  const isMountingRef = useIsMounting()

  useEffect(() => {
    if (ignoreOnMount && isMountingRef.current) {
      return undefined
    }

    setFieldValue(name, value)
  }, [name, value, ignoreOnMount, setFieldValue, isMountingRef])

  return null
}

export default SetFormikValue
