import { useMemo, useCallback, useState } from 'react'
import classNames from 'classnames'
import Dropdown from 'react-bootstrap/Dropdown'

import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'

import useMediaQuery from 'utils/use_media_query'
import { isVariant } from 'utils/use_variants'

import { forTabletDown } from 'styles/media_queries'

import DropdownIcon from 'assets/nav_bar/dropdown_icon.svg'
import DropdownIconWhite from 'assets/nav_bar/dropdown_icon_white.svg'

import classes from './styles.module.scss'
import InternalLink from 'main_app/components/InternalLink'

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
              as={InternalLink}
              href='/services/web-development'
              className={classes.dropdownItem}
            >
              Web Development
            </Dropdown.Item>
            <Dropdown.Item
              as={InternalLink}
              href='/services/staff-augmentation'
              className={classes.dropdownItem}
            >
              Staff Augmentation
            </Dropdown.Item>
            <Dropdown.Item
              as={InternalLink}
              href='/services/our-technologies'
              className={classes.dropdownItem}
            >
              Our Technologies
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
      <li
        className={classNames(classes.navItem, {
          [classes.active]: globalThis.window?.location.pathname.startsWith('/about-us')
        })}
      >
        <InternalLink href='/about-us'>
          About Us
        </InternalLink>
      </li>
      <li className={classes.navItem}>
        <InternalLink href='/#testimonials'>
          Testimonials
        </InternalLink>
      </li>
      <li className={classNames(classes.navItem)}>
        <a href='https://blog.wedevelop.me' target='_self' rel='noopener noreferrer'>
          Blog
        </a>
      </li>
      <li
        className={classNames(classes.navItem, {
          [classes.active]: globalThis.window?.location.pathname.startsWith('/portfolio')
        })}
      >
        <InternalLink href='/portfolio'>
          Portfolio
        </InternalLink>
      </li>
      <li
        className={classNames(classes.navItem, {
          [classes.active]: globalThis.window?.location.pathname.startsWith('/careers')
        })}
      >
        <InternalLink href='/careers'>
          Careers
        </InternalLink>
      </li>
      <li>
        <Button
          as={InternalLink}
          isAnchor
          variant={contactCTAVariant}
          href={contactPagePath}
          className={classes.buttonTalk}
          onClick={onRequestClose}
          link={{ scroll: false, shallow: true }}
        >
          Get in Touch
        </Button>
      </li>
    </ul>
  )
}

export default MainMenu
