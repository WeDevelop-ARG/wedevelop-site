import classnames from 'classnames'

import InternalLink from 'main_app/components/InternalLink'

import Logo from 'main_app/components/Logo'
import WrappedImage from 'main_app/components/WrappedImage'

import EmailIcon from 'assets/footer/email.svg'
import LocationIcon from 'assets/footer/location.svg'
import PhoneIcon from 'assets/footer/phone.svg'
import LinkedInIcon from 'assets/footer/linked_in.svg'
import FacebookIcon from 'assets/footer/facebook.svg'
import InstagramIcon from 'assets/footer/instagram.svg'

import classes from './styles.module.scss'

function Footer ({ className }) {
  className = classnames(
    classes.containerStyle,
    className
  )

  return (
    <footer className={className}>
      <div className={classes.contact}>
        <Logo variant='dark' />
      </div>
      <div className={classes.listUs}>
        <ul className={classes.contact}>
          <li className={classes.contactContentContainer}>
            <WrappedImage src={EmailIcon} layout='fixed' width='15' className={classes.iconStyles} />
            <a
              href='mailto:info@wedevelop.me'
              className={classes.contactContent}
            >
              info@wedevelop.me
            </a>
          </li>
          <li className={classes.contactContentContainer}>
            <WrappedImage src={LocationIcon} layout='fixed' width='15' className={classes.iconStyles} />
            <address className={classes.contactContent}>
              WeDevelop LLC FL 33134, US
            </address>
          </li>
          <li className={classes.contactContentContainer}>
            <WrappedImage src={PhoneIcon} layout='fixed' width='15' className={classes.iconStyles} />
            <a href='tel:+19254486165' className={classes.contactContent}>
              +1 (925) 448-6165
            </a>
          </li>
        </ul>
        <ul className={classes.branding}>
          <li>
            <InternalLink
              href='/privacy-policy'
              smooth
              className={classes.privacyPolicy}
            >
              Privacy&nbsp;Policy
            </InternalLink>
          </li>
          <li className={classes.pleca}>|</li>
          <li className={classes.copyright}>
            © 2022 WeDevelop LLC. All rights reserved.
          </li>
        </ul>
      </div>
      <div className={classes.socials}>
        <ul className={classes.socialNetworks}>
          <li>
            <a
              href='https://www.linkedin.com/company/wedevelop-arg'
              target='_blank'
              rel='noreferrer'
            >
              <WrappedImage
                src={LinkedInIcon}
                layout='fixed'
                width='15'
                title={"WeDevelop's LinkedIn"}
                className={classes.iconSocialNetworks}
              />
            </a>
          </li>
          <li>
            <a
              href='https://facebook.com/WeDevelop-101618141565362'
              target='_blank'
              rel='noreferrer'
            >
              <WrappedImage
                src={FacebookIcon}
                layout='fixed'
                width='15'
                title={"WeDevelop's Facebook"}
                className={classes.iconSocialNetworks}
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/wedevelop.me'
              target='_blank'
              rel='noreferrer'
            >
              <WrappedImage
                src={InstagramIcon}
                layout='fixed'
                width='15'
                title={"WeDevelop's Instagram"}
                className={classes.iconSocialNetworks}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
