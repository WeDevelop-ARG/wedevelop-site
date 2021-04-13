import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import useVariants from 'utils/use_variants'

import classes from './styles.module.scss'

function Button ({
  as: ButtonComponent = 'button',
  variant = 'primary',
  isAnchor,
  type,
  className,
  children,
  iconLeft,
  iconRight,
  ...props
}) {
  if (ButtonComponent === 'button') type = type ?? 'button'

  className = classnames(
    classes.button,
    useVariants(classes, variant, { prefix: 'variant_' }),
    useVariants(
      classes,
      isAnchor ? 'a' : ButtonComponent.toString(),
      { prefix: 'as_' }
    ),
    className
  )

  return (
    <ButtonComponent
      type={type}
      className={className}
      {...props}
    >
      {iconLeft && <div className={classes.iconLeft}>{iconLeft}</div>}
      <span>{children}</span>
      {iconRight && <div className={classes.iconRight}>{iconRight}</div>}
    </ButtonComponent>
  )
}

const variants = PropTypes.oneOf([
  'primary',
  'disabled',
  'secondary',
  'dark',
  'link'
])

Button.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.func.isRequired,
    PropTypes.object.isRequired
  ]),
  isAnchor: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  variant: PropTypes.oneOfType([
    variants,
    PropTypes.arrayOf(variants)
  ])
}

export default Button
