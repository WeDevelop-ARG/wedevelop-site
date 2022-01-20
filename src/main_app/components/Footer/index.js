import InternalLink from 'main_app/components/InternalLink'
import ClutchWidget from 'main_app/components/ClutchWidget'
import Logo from '../Logo'
import WrappedImage from '../WrappedImage'

import classes from './styles.module.scss'
import useVariants from 'utils/use_variants'
import classnames from 'classnames'

import Pattern from 'assets/footer/pattern.svg'
import Email from 'assets/footer/email.svg'
import Location from 'assets/footer/location.svg'
import Phone from 'assets/footer/phone.svg'
import Download from 'assets/footer/download.svg'
import Facebook from 'assets/footer/facebook.svg'
import Instagram from 'assets/footer/instagram.svg'
import LinkedIn from 'assets/footer/linked_in.svg'

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
          <li><Logo /></li>
          <li><ClutchWidget className={classes.clutchWidget} variant='dark' /></li>
        </ul>
        <ul className={classes.contact}>
          <li><p className={classes.titleContainer}>company</p></li>
          <li className={classes.contactContentContainer}>
            <InternalLink href='/about-us' className={classes.contactContent}>
              About Us
            </InternalLink>
          </li>
          <li className={classes.contactContentContainer}>
            <InternalLink href='/career' className={classes.contactContent}>
              Careers
            </InternalLink>
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
            <InternalLink href='/services/web-development' className={classes.contactContent}>
              Web Development
            </InternalLink>
          </li>
          <li className={classes.contactContentContainer}>
            <InternalLink href='/services/staff-augmentation' className={classes.contactContent}>
              Staff Augmentation
            </InternalLink>
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
              <WrappedImage src={Email} className={classes.iconStyles} />
              <span className={classes.contactContent}>
                info@wedevelop.me
              </span>
            </a>
          </li>
          <li className={classes.contactContentContainer}>
            <WrappedImage src={Location} className={classes.iconStyles} />
            <address className={classes.contactContent}>
              WeDevelop LLC FL 33134, US
            </address>
          </li>
          <li className={classes.contactContentContainer}>
            <WrappedImage src={Phone} className={classes.iconStyles} />
            <a href='tel:+19254486165' className={classes.contactContent}>
              +1 (925) 448-6165
            </a>
          </li>
          <li className={classes.contactContentContainer}>
            <WrappedImage src={Download} className={classes.iconStyles} />
            <a href='/storage/WeDevelop-Brochure.pdf?alt=media' target='_blank' rel='noopener noreferrer' className={classes.contactContent}>
              Download brochure
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.socials}>
        <ul className={classes.branding}>
          <li>
            <InternalLink href='/privacy-policy#top' smooth className={classes.privacyPolicy}>
              Privacy&nbsp;Policy
            </InternalLink>
          </li>
          <li className={classes.pleca}>|</li>
          <li className={classes.copyright}>
            © 2022 WeDevelop LLC. All rights reserved.
          </li>
        </ul>
        <ul className={classes.socialNetworks}>
          <li>
            <a href='https://www.linkedin.com/company/wedevelop-arg' target='_blank' rel='noreferrer'>
              <WrappedImage src={LinkedIn} title={'WeDevelop\'s LinkedIn'} className={classes.iconSocialNetworks} />
            </a>
          </li>
          <li>
            <a href='https://facebook.com/WeDevelop-101618141565362' target='_blank' rel='noreferrer'>
              <WrappedImage src={Facebook} title={'WeDevelop\'s Facebook'} className={classes.iconSocialNetworks} />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/wedevelop.me' target='_blank' rel='noreferrer'>
              <WrappedImage src={Instagram} title={'WeDevelop\'s Instagram'} className={classes.iconSocialNetworks} />
            </a>
          </li>
        </ul>
      </div>
      <WrappedImage src={Pattern} layout='fixed' alt='' className={classes.pattern} />
    </footer>
  )
}

export default Footer
