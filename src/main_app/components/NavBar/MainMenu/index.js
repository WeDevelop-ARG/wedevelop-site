import classnames from 'classnames'
import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'
import useMediaQuery from 'utils/use_media_query'

import { forPhoneOnly } from 'styles/media_queries'

import classes from './styles.module.scss'

function MainMenu ({
  isOpen,
  onRequestClose,
  className,
  buttonVariant,
  contactPagePath = '/contact'
}) {
  const isPhone = useMediaQuery(forPhoneOnly)

  return (
    <ul className={classnames(classes.menu, className, { [classes.hidden]: !isOpen })}>
      <li
        className={classnames(classes.navItem, {
          [classes.active]: window.location.pathname.startsWith('/about-us')
        })}
      >
        <HashLink to='/about-us#top'>
          About Us
        </HashLink>
      </li>
      <li
        className={classnames(classes.navItem, {
          [classes.active]: window.location.pathname.startsWith('/career')
        })}
      >
        <HashLink to='/career#top'>
          Career
        </HashLink>
      </li>
      <li className={classnames(classes.navItem)}>
        <a href='https://blog.wedevelop.me' target='_blank' rel='noopener noreferrer'>
          Blog
        </a>
      </li>
      <li className={classnames(classes.textList)}>
        Let's talk and work together
      </li>
      <li>
        <Button
          as={HashLink}
          isAnchor
          variant={['secondary', ...(isPhone ? ['dark'] : [buttonVariant])]}
          to={contactPagePath}
          smooth
          className={classes.buttonTalk}
          onClick={onRequestClose}
        >
          Get in Touch
        </Button>
      </li>
    </ul>
  )
}

export default MainMenu
