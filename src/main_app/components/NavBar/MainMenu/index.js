import classNames from 'classnames'
import { useCallback, useMemo, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'

import useMediaQuery from 'utils/use_media_query'
import { isVariant } from 'utils/use_variants'

import { forTabletDown } from 'styles/media_queries'

import DropdownIcon from 'assets/nav_bar/dropdown_icon.svg'
import DropdownIconWhite from 'assets/nav_bar/dropdown_icon_white.svg'

import InternalLink from 'main_app/components/InternalLink'
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
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false)
  const [isCareersDropdownOpen, setIsCareersDropdownOpen] = useState(false)

  return (
    <ul onClick={handleClick} className={classNames(classes.menu, className, { [classes.hidden]: !isOpen })}>
      <li
        className={classNames(classes.navItem, {
          [classes.active]: globalThis.window?.location.pathname.endsWith('/')
        })}
      >
        <InternalLink href='/'>
          Home
        </InternalLink>
      </li>
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

          <Dropdown.Menu className={classes.dropdownMenu} renderOnMount>
            <Dropdown.Item
              as={InternalLink}
              href='/services/web-development'
              className={classes.dropdownItem}
            >
              Web Development
            </Dropdown.Item>
            <Dropdown.Item
              as={InternalLink}
              href='/services/hiring-solutions'
              className={classes.dropdownItem}
            >
              IT Talent Solutions
            </Dropdown.Item>
            <Dropdown.Item
              as={InternalLink}
              href='/services/how-we-hire'
              className={classes.dropdownItem}
            >
              How We Hire
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
        <Dropdown show={isAboutUsDropdownOpen} onToggle={setIsAboutUsDropdownOpen}>
          <Dropdown.Toggle
            as={Button}
            variant='link'
            className={classNames(classes.servicesDropdownToggle, {
              [classes.open]: isAboutUsDropdownOpen
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
            About Us
          </Dropdown.Toggle>

          <Dropdown.Menu className={classes.dropdownMenu} renderOnMount>
            <Dropdown.Item
              as={InternalLink}
              href='/about-us'
              className={classes.dropdownItem}
            >
              Who we are
            </Dropdown.Item>
            <Dropdown.Item
              as={InternalLink}
              href='/about-us/areas-of-expertise'
              className={classes.dropdownItem}
            >
              Areas of Expertise
            </Dropdown.Item>
            <Dropdown.Item
              as={InternalLink}
              href='/about-us/success-stories'
              className={classes.dropdownItem}
            >
              Success Stories
            </Dropdown.Item>
            <Dropdown.Item
              as={InternalLink}
              href='/about-us/nearshore-outsourcing'
              className={classes.dropdownItem}
            >
              Nearshore outsourcing
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
      <li className={classNames(classes.navItem)}>
        <InternalLink href='/careers/work-culture'>
          Careers
        </InternalLink>
      </li>
      <li className={classNames(classes.navItem)}>
        <a href='https://blog.wedevelop.com' target='_self' rel='noopener noreferrer'>
          Blog
        </a>
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
