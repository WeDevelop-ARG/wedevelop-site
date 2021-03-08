import { useRef, useCallback, useEffect } from 'react'
import classnames from 'classnames'

import classes from './styles.module.scss'

function Select ({ children, className, onChange, ...props }) {
  const selectRef = useRef()
  const sizeRef = useRef()
  const handleResize = useCallback(() => {
    sizeRef.current.querySelector('option')
      .innerText = selectRef.current.querySelector('option:checked').innerText

    selectRef.current.style.width = `${sizeRef.current.offsetWidth}px`
  }, [])
  const handleChange = useCallback((...args) => {
    onChange?.(...args)
    handleResize()
  }, [onChange, handleResize])

  useEffect(() => {
    handleResize()
  }, [handleResize])

  return (
    <>
      <select
        ref={selectRef}
        onChange={handleChange}
        className={className}
      >
        {children}
      </select>
      <select
        ref={sizeRef}
        aria-hidden='true'
        className={classnames(classes.hidden, className)}
      >
        <option />
      </select>
    </>
  )
}

export default Select
