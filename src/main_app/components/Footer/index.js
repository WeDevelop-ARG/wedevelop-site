import { HashLink } from 'react-router-hash-link'

import SVGIcon from '../SVGIcon'
import ClutchWidget from 'main_app/components/ClutchWidget'
import Logo from '../Logo'

import classes from './styles.module.scss'
import useVariants from 'utils/use_variants'
import classnames from 'classnames'

import pattern from 'assets/footer/pattern.svg'

function Footer ({ variant = 'dark', className }) {
  className = classnames(
    classes.containerStyle,
    useVariants(classes, variant, { prefix: 'variant_' }),
    className
  )
  return (
    <footer className={className}>
      <div className={classes.listUs}>
        <ul className={classes.contact}>
          <li>
            <Logo
              variant='dark'
            />
          </li>
          <li><ClutchWidget className={classes.clutchWidget} variant='dark' /></li>
        </ul>
        <ul className={classes.contact}>
          <li><p className={classes.titleContainer}>company</p></li>
          <li className={classes.contactContentContainer}>
            <HashLink to='/about-us#top' smooth className={classes.contactContent}>
              About Us
            </HashLink>
          </li>
          <li className={classes.contactContentContainer}>
            <HashLink to='/career#top' smooth className={classes.contactContent}>
              Careers
            </HashLink>
          </li>
          <li className={classes.contactContentContainer}>
            <a href='https://blog.wedevelop.me' target='_blank' rel='noopener noreferrer' className={classes.contactContent}>
              Blog
            </a>
          </li>
        </ul>
        <ul className={classes.contact}>
          <li><p className={classes.titleContainer}>services</p></li>
          <li className={classes.contactContentContainer}>
            <HashLink to='/#top' smooth className={classes.contactContent}>
              Web Development
            </HashLink>
          </li>
          <li className={classes.contactContentContainer}>
            <HashLink to='/#top' smooth className={classes.contactContent}>
              Staff Augmentation
            </HashLink>
          </li>
        </ul>
        <ul className={classes.contact}>
          <li><p className={classes.titleContainer}>technologies</p></li>
          <div className={classes.listTech}>
            <li className={classes.contactContentContainer}>
              React
            </li>
            <li className={classes.contactContentContainer}>
              Ruby on Rails
            </li>
            <li className={classes.contactContentContainer}>
              Node.js
            </li>
            <li className={classes.contactContentContainer}>
              PostgreSQL
            </li>
            <li className={classes.contactContentContainer}>
              Python
            </li>
            <li className={classes.contactContentContainer}>
              GraphQL
            </li>
            <li className={classes.contactContentContainer}>
              AWS
            </li>
            <li className={classes.contactContentContainer}>
              MongoDB
            </li>
          </div>
        </ul>
        <ul className={classes.contact}>
          <li><p className={classes.titleContainer}>contact us</p></li>
          <li>
            <a href='mailto:info@wedevelop.me' className={classes.contactContentContainer}>
              <SVGIcon name='footer/email' className={classes.iconStyles} />
              <span className={classes.contactContent}>
                info@wedevelop.me
              </span>
            </a>
          </li>
          <li className={classes.contactContentContainer}>
            <SVGIcon name='footer/location' className={classes.iconStyles} />
            <address className={classes.contactContent}>
              WeDevelop LLC FL 33134, US
            </address>
          </li>
          <li className={classes.contactContentContainer}>
            <SVGIcon name='footer/phone' className={classes.iconStyles} />
            <a href='tel:+19254486165' className={classes.contactContent}>
              +1 (925) 448-6165
            </a>
          </li>
          <li className={classes.contactContentContainer}>
            <SVGIcon name='footer/download' className={classes.iconStyles} />
            <a href='/storage/WeDevelop-Brochure.pdf?alt=media' target='_blank' rel='noopener noreferrer' className={classes.contactContent}>
              Download brochure
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.socials}>
        <ul className={classes.branding}>
          <li>
            <HashLink to='/privacy-policy#top' smooth className={classes.privacyPolicy}>
              Privacy&nbsp;Policy
            </HashLink>
          </li>
          <li className={classes.pleca}>|</li>
          <li className={classes.copyright}>
            © 2021 WeDevelop LLC. All rights reserved.
          </li>
        </ul>
        <ul className={classes.socialNetworks}>
          <li>
            <a href='https://www.linkedin.com/company/wedevelop-arg' target='_blank' rel='noreferrer'>
              <SVGIcon name='footer/linked_in' title={'WeDevelop\'s LinkedIn'} className={classes.iconSocialNetworks} />
            </a>
          </li>
          <li>
            <a href='https://facebook.com/WeDevelop-101618141565362' target='_blank' rel='noreferrer'>
              <SVGIcon name='footer/facebook' title={'WeDevelop\'s Facebook'} className={classes.iconSocialNetworks} />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/wedevelop.me' target='_blank' rel='noreferrer'>
              <SVGIcon name='footer/instagram' title={'WeDevelop\'s Instagram'} className={classes.iconSocialNetworks} />
            </a>
          </li>
        </ul>
      </div>
      <img src={pattern} alt='' className={classes.pattern} />
    </footer>
  )
}

export default Footer
