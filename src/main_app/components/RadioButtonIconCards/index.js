import React from 'react'

import Image from 'next/image'
import RadioButtonCard from '../RadioButtonCard'

import classes from './styles.module.scss'

function RadioButtonIconCards ({ options, name }) {
  return (
    <ul className={classes.listCards}>
      {options.map(option => (
        <li key={option.value}>
          <RadioButtonCard
            name={name}
            value={option.value}
            className={classes.card}
          >
            {option.icon && <div className={classes.icon}>{option.icon}</div>}
            {option.iconURL && <Image src={option.iconURL} alt='' className={classes.icon} />}
            <span className={classes.textCard}>{option.label}</span>
          </RadioButtonCard>
        </li>
      ))}
    </ul>
  )
}

export default RadioButtonIconCards
