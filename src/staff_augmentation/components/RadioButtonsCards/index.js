import React from 'react'
import { Field } from 'formik'

import classes from './styles.module.scss'

function RadioButtonsCards (props) {
  const { label, name, options, ...rest } = props

  return (
    <ul className={classes.listCards}>
      <Field name={name} {...rest}>
        {
          ({ field }) => {
            return options.map(option => {
              return (
                <li key={option.key}>
                  <label htmlFor={option.value}><h3>{option.value}</h3></label>
                  <input
                    {...field}
                    type='radio'
                    id={option.value}
                    value={option.value}
                    checked={field.value === option.value}
                    className={classes.card}
                  />
                </li>
              )
            })
          }
        }
      </Field>
    </ul>
  )
}

export default RadioButtonsCards
