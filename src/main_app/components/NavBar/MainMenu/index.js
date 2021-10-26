import { useMemo, useCallback, useState } from 'react'
import classNames from 'classnames'
import { HashLink } from 'react-router-hash-link'
import Dropdown from 'react-bootstrap/Dropdown'

import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'

import useMediaQuery from 'utils/use_media_query'
import { isVariant } from 'utils/use_variants'

import { forTabletDown } from 'styles/media_queries'

import DropdownIcon from 'assets/nav_bar/dropdown_icon.svg'
import DropdownIconWhite from 'assets/nav_bar/dropdown_icon_white.svg'

import classes from './styles.module.scss'

function MainMenu ({
  isOpen,
  onRequestClose,
  className,
  variant,
  contactPagePath = '/contact'
}) {
  const isTabletDown = useMediaQuery(forTabletDown)
  const dropdownIconURL = isVariant(variant, 'light') && !isTabletDown ? DropdownIconWhite : DropdownIcon
  const contactCTAVariant = useMemo(() => {
    if (isTabletDown) return ['primary', 'dark']
    if (isVariant(variant, 'transparent') && isVariant(variant, 'light')) {
      return ['secondary', 'dark']
    } else if (isVariant(variant, 'transparent') && !isVariant(variant, 'light')) {
      return ['secondary', 'light']
    } else if (isVariant('light')) {
      return ['primary', 'dark']
    }

    return ['primary', 'light']
  }, [variant, isTabletDown])
  const handleClick = useCallback((e) => {
    const buttonOrAnchor = e.target.closest('a') ?? e.target.closest('button')

    if (buttonOrAnchor !== null && buttonOrAnchor.dataset.closeMenuOnClick !== 'false') {
      onRequestClose()
    }
  }, [onRequestClose])
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  return (
    <ul onClick={handleClick} className={classNames(classes.menu, className, { [classes.hidden]: !isOpen })}>
      <li
        className={classNames(classes.navItem, {
          [classes.active]: window.location.pathname.startsWith('/services')
        })}
      >
        <Dropdown show={isServicesDropdownOpen} onToggle={setIsServicesDropdownOpen}>
          <Dropdown.Toggle
            as={Button}
            variant='link'
            className={classNames(classes.servicesDropdownToggle, {
              [classes.open]: isServicesDropdownOpen
            })}
            data-close-menu-on-click='false'
            iconRight={
              <Image
                src={dropdownIconURL}
                alt=''
                className={classes.iconRight}
              />
            }
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
        className={classNames(classes.navItem, {
          [classes.active]: window.location.pathname.startsWith('/about-us')
        })}
      >
        <HashLink to='/about-us#top'>
          About Us
        </HashLink>
      </li>
      <li className={classes.navItem}>
        <HashLink to='/#testimonials' smooth>
          Testimonials
        </HashLink>
      </li>
      <li className={classNames(classes.navItem)}>
        <a href='https://blog.wedevelop.me' target='_blank' rel='noopener noreferrer'>
          Blog
        </a>
      </li>
      <li
        className={classNames(classes.navItem, {
          [classes.active]: window.location.pathname.startsWith('/portfolio')
        })}
      >
        <HashLink to='/portfolio#top'>
          Portfolio
        </HashLink>
      </li>
      <li
        className={classNames(classes.navItem, {
          [classes.active]: window.location.pathname.startsWith('/career')
        })}
      >
        <HashLink to='/career#top'>
          Careers
        </HashLink>
      </li>
      <li>
        <Button
          as={HashLink}
          isAnchor
          variant={contactCTAVariant}
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
