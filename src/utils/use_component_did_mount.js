import { useEffect, useState } from 'react'

function useComponentDidMount () {
  const [didMount, setDidMount] = useState(false)

  useEffect(() => {
    setDidMount(true)
  }, [])

  return didMount
}

export default useComponentDidMount
