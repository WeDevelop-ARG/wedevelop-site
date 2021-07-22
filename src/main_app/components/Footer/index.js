import { HashLink } from 'react-router-hash-link'
import SVGIcon from '../SVGIcon'
import ClutchWidget from 'main_app/components/ClutchWidget'
import classes from './styles.module.scss'
import useVariants from 'utils/use_variants'
import classnames from 'classnames'

function Footer ({ variant = 'dark', className }) {
  className = classnames(
    classes.containerStyle,
    useVariants(classes, variant, { prefix: 'variant_' }),
    className
  )
  return (
    <footer className={className}>
      <ul className={classes.contact}>
        <li><SVGIcon name='logoBlue' /></li>
        <ClutchWidget className={classes.clutchWidget} variant='dark' />
      </ul>
      <ul className={classes.contact}>
        <li><p className={classes.titleContainer}>company</p></li>
        <li className={classes.contactContentContainer}>
          <a href='https://blog.wedevelop.me' target='_blank' rel='noopener noreferrer' className={classes.contactContent}>
            Blog
          </a>
        </li>
      </ul>
      <ul className={classes.contact}>
        <li><p className={classes.titleContainer}>technologies</p></li>
        <li className={classes.contactContentContainer}>
          <span>
            React
          </span>
          <span className={classes.techContent}>
            Ruby on Rails
          </span>
        </li>
        <li className={classes.contactContentContainer}>
          <span>
            Node.js
          </span>
          <span className={classes.techContent}>
            PostgreSQL
          </span>
        </li>
        <li className={classes.contactContentContainer}>
          <span>
            Python
          </span>
          <span className={classes.techContent}>
            GraphQL
          </span>
        </li>
        <li className={classes.contactContentContainer}>
          <span>
            AWS
          </span>
          <span className={classes.techContent}>
            MongoDB
          </span>
        </li>
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
      </ul>
      <SVGIcon name='footer/pattern' className={classes.pattern} />
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
              <SVGIcon name='footer/linked_in' title={'WeDevelop\'s LinkedIn'} className={classes.iconStyles} />
            </a>
          </li>
          <li>
            <a href='https://facebook.com/WeDevelop-101618141565362' target='_blank' rel='noreferrer'>
              <SVGIcon name='footer/facebook' title={'WeDevelop\'s Facebook'} className={classes.iconStyles} />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/wedevelop.me' target='_blank' rel='noreferrer'>
              <SVGIcon name='footer/instagram' title={'WeDevelop\'s Instagram'} className={classes.iconStyles} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
