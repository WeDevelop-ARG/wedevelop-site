import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'
import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function LookingForLink ({ icon, lookingTo, ...props }) {
  const to = {
    path: '/',
    hash: 'lets_talk',
    state: { letsTalkForm: { lookingTo } }
  }
  const iconLeft = (
    <SVGIcon
      name={`offerings/${icon}`}
      className={classes.menuIcon}
    />
  )

  return (
    <Button
      as={HashLink}
      variant='link'
      iconLeft={iconLeft}
      to={to}
      smooth
      {...props}
    />
  )
}

export default LookingForLink
