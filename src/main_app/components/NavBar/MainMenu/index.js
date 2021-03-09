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
          {lookingForOpen && <SVGIcon name='nav_bar/chevron_right' className={classes.chevronLeft}/>}
          What are you looking for?
          {!lookingForOpen && <SVGIcon name='nav_bar/chevron_right' className={classes.chevronRight }/>}
        </a>
      </li>
      {!lookingForOpen && (
        <>
          <li><a href='#au'>About us</a></li>
          <li><a href='#p'>Portfolio</a></li>
          <li><a href='#b'>Blog</a></li>
          <li><a href='#lt' className={classes.buttonTalk}>Let's talk</a></li>
        </>
      )}
      {lookingForOpen && (
        <>
          <li className={classes.listAlign}>
            <SVGIcon name='offerings/validate' className={classes.menuIcon} />
            <a href='#vai'>Validate an idea</a>
          </li>
          <li className={classes.listAlign}>
            <SVGIcon name='offerings/design' className={classes.menuIcon}/>
            <a href='#dcap'>Design / create a product</a>
          </li>
          <li className={classes.listAlign}>
            <SVGIcon name='offerings/dev_team' className={classes.menuIcon}/>
            <a href='#puqadt'>Partner up with a dev team</a>
          </li>
          <li className={classes.listAlign}>
            <SVGIcon name='offerings/scale' className={classes.menuIcon}/>
            <a href='#scap'>Scale / change a product</a>
          </li>
          <li className={classes.listAlign}>
            <SVGIcon name='offerings/all' className={classes.menuIcon}/>
            <a href='#smayo'>Show me all your offerings</a>
          </li>
        </>
      )}
    </ul>
  )
}

export default MainMenu
