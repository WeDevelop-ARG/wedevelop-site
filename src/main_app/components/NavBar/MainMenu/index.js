import { useCallback, useEffect, useState } from 'react'
import classnames from 'classnames'

import SVGIcon from '../../SVGIcon'

import classes from './styles.module.scss'

function MainMenu ({ isOpen, className }) {
  const [lookingForOpen, setLookingForOpen] = useState(false)
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
        <a href='#waylf' onClick={toggleLookingFor}>
          {lookingForOpen && <SVGIcon name='nav_bar/chevron_right' className={classes.chevronLogo}/>}
          What are you looking for?
          {!lookingForOpen && <SVGIcon name='nav_bar/chevron_right' className={classes.chevronLogo}/>}
        </a>
      </li>
      {!lookingForOpen && (
        <>
          <li><a href='#au'>About us</a></li>
          <li><a href='#p'>Portfolio</a></li>
          <li><a href='#b'>Blog</a></li>
          <li><a href='#lt'>Let's talk</a></li>
        </>
      )}
      {lookingForOpen && (
        <>
          <li>
            <SVGIcon name='offerings/validate' className={classes.validateIdeaLogo} />
            <a href='#vai'>Validate an idea</a>
          </li>
          <li>
            <SVGIcon name='offerings/design' className={classes.validateIdeaLogo}/>
            <a href='#dcap'>Design / create a product</a>
          </li>
          <li>
            <SVGIcon name='offerings/dev_team' className={classes.validateIdeaLogo}/>
            <a href='#puqadt'>Partner up with a dev team</a>
          </li>
          <li>
            <SVGIcon name='offerings/scale' className={classes.validateIdeaLogo}/>
            <a href='#scap'>Scale / change a product</a>
          </li>
          <li>
            <SVGIcon name='offerings/all' className={classes.validateIdeaLogo}/>
            <a href='#smayo'>Show me all your offerings</a>
          </li>
        </>
      )}
    </ul>
  )
}

export default MainMenu
