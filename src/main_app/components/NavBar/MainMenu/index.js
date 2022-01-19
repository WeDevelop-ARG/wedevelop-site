import { useMemo, useCallback, useState } from 'react'
import classNames from 'classnames'
import Dropdown from 'react-bootstrap/Dropdown'

import Button from 'main_app/components/Button'
import Image from 'next/image'

import useMediaQuery from 'utils/use_media_query'
import { isVariant } from 'utils/use_variants'

import { forTabletDown } from 'styles/media_queries'

import DropdownIcon from 'assets/nav_bar/dropdown_icon.svg'
import DropdownIconWhite from 'assets/nav_bar/dropdown_icon_white.svg'
import Link from 'next/link'

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
          [classes.active]: globalThis.window?.location.pathname.startsWith('/services')
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
              as={Link}
              href='/services/web-development#top'
              smooth
              className={classes.dropdownItem}
            >
              Web Development
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              href='/services/staff-augmentation#top'
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
          [classes.active]: globalThis.window?.location.pathname.startsWith('/about-us')
        })}
      >
        <Link href='/about-us#top'>
          About Us
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link href='/#testimonials' smooth>
          Testimonials
        </Link>
      </li>
      <li className={classNames(classes.navItem)}>
        <a href='https://blog.wedevelop.me' target='_blank' rel='noopener noreferrer'>
          Blog
        </a>
      </li>
      <li
        className={classNames(classes.navItem, {
          [classes.active]: globalThis.window?.location.pathname.startsWith('/career')
        })}
      >
        <Link href='/career#top'>
          Careers
        </Link>
      </li>
      <li>
        <Button
          as={Link}
          isAnchor
          variant={contactCTAVariant}
          href={contactPagePath}
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
