import { useMemo } from 'react'
import classnames from 'classnames'
import { HashLink } from 'react-router-hash-link'
import Dropdown from 'react-bootstrap/Dropdown'

import Button from 'main_app/components/Button'
import useMediaQuery from 'utils/use_media_query'
import { isVariant } from 'utils/use_variants'

import { forTabletDown } from 'styles/media_queries'

import DropdownIcon from 'assets/nav_bar/dropdown_icon.svg'
import DropdownIconWhite from 'assets/nav_bar/dropdown_icon_white.svg'

import classes from './styles.module.scss'
import Image from 'main_app/components/Image'
import { useCallback } from 'react'

function MainMenu ({
  isOpen,
  onRequestClose,
  className,
  variant,
  contactPagePath = '/contact'
}) {
  const isTabletDown = useMediaQuery(forTabletDown)
  const dropdownIconURL = isVariant(variant, 'light') || isTabletDown ? DropdownIconWhite : DropdownIcon
  const buttonVariant = useMemo(() => {
    if (isVariant(variant, 'light')) return 'dark'
  }, [variant])
  const handleClick = useCallback((e) => {
    if (e.target.closest('a') !== null || e.target.closest('button') !== null) {
      onRequestClose()
    }
  }, [onRequestClose])

  return (
    <ul onClick={handleClick} className={classnames(classes.menu, className, { [classes.hidden]: !isOpen })}>
      <li
        className={classnames(classes.navItem, {
          [classes.active]: window.location.pathname.startsWith('/services')
        })}
      >
        <Dropdown className={classnames({ [classes.hidden]: isTabletDown })}>
          <Dropdown.Toggle
            as={Button}
            variant='link'
            className={classes.servicesDropdownToggle}
            iconRight={<Image src={dropdownIconURL} alt='' />}
          >
            Services
          </Dropdown.Toggle>

          <Dropdown.Menu className={classes.dropdownMenu}>
            <Dropdown.Item
              as={HashLink}
              to='/services/web-development#top'
              smooth
              className={classes.dropdownItem}
            >
              Web Development
            </Dropdown.Item>
            <Dropdown.Item
              as={HashLink}
              to='/services/staff-augmentation#top'
              smooth
              className={classes.dropdownItem}
            >
              Staff Augmentation
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
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
          Careers
        </HashLink>
      </li>
      <li className={classnames(classes.navItem)}>
        <a href='https://blog.wedevelop.me' target='_blank' rel='noopener noreferrer'>
          Blog
        </a>
      </li>
      {isTabletDown && (
        <>
          <li className={classnames(classes.textList)}>
            Our Services
          </li>
          <li className={classes.navItem}>
            <HashLink to='/services/web-development#top'>
              Web Development
            </HashLink>
          </li>
          <li className={classes.navItem}>
            <HashLink to='/services/staff-augmentation#top'>
              Staff Augmentation
            </HashLink>
          </li>
        </>
      )}
      <li className={classnames(classes.textList)}>
        Let's talk and work together
      </li>
      <li>
        <Button
          as={HashLink}
          isAnchor
          variant={['secondary', ...(isTabletDown ? ['dark'] : [buttonVariant])]}
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
