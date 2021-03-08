import { useCallback, useState } from 'react'

import classes from './styles.module.scss'

function Textarea ({ onChange, maxLength, ...props }) {
  const [length, setLength] = useState(0)
  const handleChange = useCallback((e, ...args) => {
    setLength(e.target.value.length)
    onChange?.(e, ...args)
  }, [onChange])

  return (
    <>
      <textarea
        maxLength={maxLength}
        onChange={handleChange}
        {...props}
      />
      <div
        className={classes.charactersLeft}
        aria-label={`${length} characters out of ${maxLength}`}
      >
        {length}/{maxLength}
      </div>
    </>
  )
}

export default Textarea
