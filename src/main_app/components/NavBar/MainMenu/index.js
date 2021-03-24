import { useCallback, useEffect, useState } from 'react'
import classnames from 'classnames'
import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'
import SVGIcon from 'main_app/components/SVGIcon'
import useMediaQuery from 'utils/use_media_query'

import LookingForLink from './LookingForLink'

import { forDesktopUp } from 'styles/media_queries'

import classes from './styles.module.scss'

function MainMenu ({ isOpen, onRequestClose, className }) {
  const [lookingForOpen, setLookingForOpen] = useState(false)
  const isDesktopUp = useMediaQuery(forDesktopUp)
  const toggleLookingFor = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setLookingForOpen(v => !v)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setLookingForOpen(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ul className={classnames(classes.menu, className)}>
      <li>
        <Button
          variant='link'
          onClick={toggleLookingFor}
          className={classes.whatAreYouLookingFor}
          iconLeft={lookingForOpen && <SVGIcon name='nav_bar/chevron_right' className={classes.chevronLeft} />}
          iconRight={!lookingForOpen && <SVGIcon name='nav_bar/chevron_right' className={classes.chevronRight} />}
        >
          What are you looking for?
        </Button>
      </li>
      {(!lookingForOpen || isDesktopUp) && (
        <>
          <li><a href='https://blog.wedevelop.me'>Blog</a></li>
          <li>
            <Button
              as={HashLink}
              variant='link'
              to='/#lets_talk'
              smooth
              className={classes.buttonTalk}
              onClick={onRequestClose}
            >
              {isDesktopUp && 'Contact us'}
              {!isDesktopUp && 'Contact us'}
            </Button>
          </li>
        </>
      )}
      {lookingForOpen && !isDesktopUp && (
        <>
          <li>
            <LookingForLink
              icon='validate'
              lookingTo='validate_idea'
              onClick={onRequestClose}
            >
              Validate an idea
            </LookingForLink>
          </li>
          <li>
            <LookingForLink
              icon='design'
              lookingTo='create_product'
              onClick={onRequestClose}
            >
              Design / create a product
            </LookingForLink>
          </li>
          <li>
            <LookingForLink
              icon='dev_team'
              lookingTo='partner_up'
              onClick={onRequestClose}
            >
              Partner up with a dev team
            </LookingForLink>
          </li>
          <li>
            <LookingForLink
              icon='scale'
              lookingTo='change_product'
              onClick={onRequestClose}
            >
              Scale / change a product
            </LookingForLink>
          </li>
          <li>
            <LookingForLink
              icon='all'
              lookingTo='talk_to_representative'
              onClick={onRequestClose}
            >
              Show me all your offerings
            </LookingForLink>
          </li>
        </>
      )}
    </ul>
  )
}

export default MainMenu
