import Link from 'next/link'

import SVGIcon from 'main_app/components/SVGIcon'
import Logo from 'main_app/components/Logo'

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
      <div className={classes.contact}>
        <Logo
          variant='dark'
        />
      </div>
      <div className={classes.listUs}>
        <ul className={classes.contact}>
          <li className={classes.contactContentContainer}>
            <SVGIcon name='footer/email' className={classes.iconStyles} />
            <a href='mailto:info@wedevelop.me' className={classes.contactContent}>
              info@wedevelop.me
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
        <ul className={classes.branding}>
          <li>
            <Link href='/privacy-policy#top' smooth className={classes.privacyPolicy}>
              Privacy&nbsp;Policy
            </Link>
          </li>
          <li className={classes.pleca}>|</li>
          <li className={classes.copyright}>
            © 2021 WeDevelop LLC. All rights reserved.
          </li>
        </ul>
      </div>
      <div className={classes.socials}>
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
    </footer>
  )
}

export default Footer
