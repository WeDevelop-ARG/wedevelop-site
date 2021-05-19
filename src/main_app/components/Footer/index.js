import { HashLink } from 'react-router-hash-link'
import Logo from '../Logo'
import SVGIcon from '../SVGIcon'
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
      <ul className={classes.branding}>
        <Logo className={classes.logoStyle} />
        <div className={classes.copyright}>
          © 2021 WeDevelop LLC. All rights reserved.
        </div>
        <HashLink to='/privacy-policy#top' smooth className={classes.privacyPolicy}>
          Privacy Policy
        </HashLink>
      </ul>
      <ul className={classes.contact}>
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
    </footer>
  )
}

export default Footer
