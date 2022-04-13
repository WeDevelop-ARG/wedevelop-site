import { isNil } from 'lodash'
import { useCallback, useState } from 'react'

import classes from './styles.module.scss'

function Textarea ({ onChange, maxLength, ...props }) {
  const [length, setLength] = useState(0)
  const handleChange = useCallback((e, ...args) => {
    if (Number.isInteger(Number(maxLength))) {
      e.target.value = e.target.value.substr(0, Number(maxLength))
    }

    setLength(e.target.value.length)
    onChange?.(e, ...args)
  }, [onChange, maxLength])

  function renderCounter () {
    if (isNil(maxLength)) { return (<></>) }
    return (<span>{length}/{maxLength}</span>)
  }

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
        {renderCounter()}
      </div>
    </>
  )
}

export default Textarea
