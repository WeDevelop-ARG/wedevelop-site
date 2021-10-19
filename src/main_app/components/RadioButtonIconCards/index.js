import React from 'react'

import Image from 'main_app/components/Image'
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
            <Image src={option.urlIcon} alt='' className={classes.urlIcon} />
            <h3 className={classes.textCard}>{option.label}</h3>
          </RadioButtonCard>
        </li>
      ))}
    </ul>
  )
}

export default RadioButtonIconCards
