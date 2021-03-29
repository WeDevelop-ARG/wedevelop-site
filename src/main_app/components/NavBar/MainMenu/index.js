import classnames from 'classnames'
import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'
import useMediaQuery from 'utils/use_media_query'

import { forPhoneOnly } from 'styles/media_queries'

import classes from './styles.module.scss'

function MainMenu ({ isOpen, onRequestClose, className }) {
  const isPhone = useMediaQuery(forPhoneOnly)

  if (!isOpen) return null

  return (
    <ul className={classnames(classes.menu, className)}>
      <li className={classnames(classes.blogText)}><a href='https://blog.wedevelop.me' target='_blank' rel='noopener noreferrer'>Blog</a></li>
      <li className={classnames(classes.textList)}>Let's talk and work together</li>
      <li>
        <Button
          as={HashLink}
          isAnchor
          variant={['secondary', isPhone ? 'dark' : '']}
          to='/#lets_talk'
          smooth
          className={classes.buttonTalk}
          onClick={onRequestClose}
        >
          Contact us
        </Button>
      </li>
    </ul>
  )
}

export default MainMenu
