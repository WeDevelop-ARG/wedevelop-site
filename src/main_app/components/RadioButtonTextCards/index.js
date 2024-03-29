import React from 'react'
import RadioButtonCard from '../RadioButtonCard'

import classes from './styles.module.scss'

function RadioButtonTextCards ({ options, name }) {
  return (
    <ul className={classes.listCards}>
      {options.map(option => (
        <li key={option.value}>
          <RadioButtonCard
            name={name}
            value={option.value}
            className={classes.card}
          >
            <span className={classes.textCard}>{option.label}</span>
          </RadioButtonCard>
        </li>
      ))}
    </ul>
  )
}

export default RadioButtonTextCards
