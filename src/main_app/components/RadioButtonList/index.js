import React from 'react'
import RadioButton from '../RadioButton'

import classes from './styles.module.scss'

function RadioButtonList ({ options, name }) {
  return (
    <ul className={classes.radioButtonList}>
      {options.map(option => (
        <li key={option.value}>
          <RadioButton
            name={name}
            value={option.value}
            className={classes.card}
          >
            <div className={classes.label}>{option.label}</div>
          </RadioButton>
        </li>
      ))}
    </ul>
  )
}

export default RadioButtonList
