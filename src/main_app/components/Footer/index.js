import ClutchWidget from 'main_app/components/ClutchWidget'
import InternalLink from 'main_app/components/InternalLink'
import Logo from '../Logo'
import WrappedImage from '../WrappedImage'

import classnames from 'classnames'
import classes from './styles.module.scss'

import Email from 'assets/footer/email.svg'
import Facebook from 'assets/footer/facebook.svg'
import Instagram from 'assets/footer/instagram.svg'
import LinkedIn from 'assets/footer/linked_in.svg'
import Pattern from 'assets/footer/pattern.svg'
import Phone from 'assets/footer/phone.svg'
import Button from '../Button'

function Footer ({ className, contactPagePath = '/contact', hideContactButton = true, email = 'info@wedevelop.com' }) {
  className = classnames(
    classes.containerStyle,
    className
  )

  return (
    <footer className={className}>
      <div className={classes.listUs}>
        <div className={classes.weDevelop}>
          <Logo />
          <ClutchWidget className={classes.clutchWidget} variant='dark' />
        </div>
        <div className={classes.pageContent}>
          <ul className={classes.contact}>
            <li><p className={classes.titleContainer}>services</p></li>
            <li className={classes.contactContentContainer}>
              <InternalLink href='/services/web-development' className={classes.contactContent}>
                Web Development
              </InternalLink>
            </li>
            <li className={classes.contactContentContainer}>
              <InternalLink href='/services/hiring-solutions' className={classes.contactContent}>
                IT Talent Solutions
              </InternalLink>
            </li>
            <li className={classes.contactContentContainer}>
              <InternalLink href='/services/how-we-hire' className={classes.contactContent}>
                How We Hire
              </InternalLink>
            </li>
            <li className={classes.contactContentContainer}>
              <InternalLink href='/services/our-technologies' className={classes.contactContent}>
                Our Technologies
              </InternalLink>
            </li>
          </ul>
          <ul className={classes.contact}>
            <li><p className={classes.titleContainer}>about us</p></li>
            <li className={classes.contactContentContainer}>
              <InternalLink href='/about-us' className={classes.contactContent}>
                Who We Are
              </InternalLink>
            </li>
            <li className={classes.contactContentContainer}>
              <InternalLink href='/about-us/areas-of-expertise' className={classes.contactContent}>
                Areas of Expertise
              </InternalLink>
            </li>
            <li className={classes.contactContentContainer}>
              <InternalLink href='/about-us/success-stories' className={classes.contactContent}>
                Success Stories
              </InternalLink>
            </li>
            <li className={classes.contactContentContainer}>
              <InternalLink href='/about-us/nearshore-outsourcing' className={classes.contactContent}>
                Nearshore Outsourcing
              </InternalLink>
            </li>
          </ul>
          <ul className={classes.contact}>
            <li><p className={classes.titleContainer}>careers</p></li>
            <li className={classes.contactContentContainer}>
              <InternalLink href='/careers/work-culture' className={classes.contactContent}>
                Careers &#129321;
              </InternalLink>
            </li>
            <hr className={classes.divider} />
            <li className={classes.contactContentContainer}>
              <a href='https://blog.wedevelop.com' target='_blank' rel='noopener noreferrer' className={classes.contactContent}>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.contactUs}>
          <ul className={classes.contact}>
            {!hideContactButton && (
              <li className={classes.buttonContainer}>
                <Button
                  as={InternalLink}
                  href={contactPagePath}
                  className={classes.letsTalkButton}
                >
                  Let's Talk!
                </Button>
              </li>
            )}
            <li className={classes.followUs}>
              <span className={classes.title}>Follow us on Social Media</span>
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
                  <a href='https://www.instagram.com/wedevelop.com' target='_blank' rel='noreferrer'>
                    <WrappedImage src={Instagram} title={'WeDevelop\'s Instagram'} className={classes.iconSocialNetworks} />
                  </a>
                </li>
              </ul>
              <ul className={classes.directContact}>
                <li>
                  <a href={`mailto:${email}`} className={classes.contactContentContainer}>
                    <WrappedImage src={Email} className={classes.iconStyles} />
                    <span className={classes.contactContent}>
                      {email}
                    </span>
                  </a>
                </li>
                <li className={classes.pleca}>|</li>
                <li>
                  <a href='tel:+19255426582' className={classes.contactContentContainer}>
                    <WrappedImage src={Phone} className={classes.iconStyles} />
                    <span className={classes.contactContent}>
                      +1 (925) 542-6582
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.socials}>
        <ul className={classes.branding}>
          <li>
            <InternalLink href='/privacy-policy' className={classes.privacyPolicy}>
              Privacy&nbsp;Policy
            </InternalLink>
          </li>
          <li className={classes.pleca}>|</li>
          <li className={classes.copyright}>
            © 2022 WeDevelop LLC. All rights reserved.
          </li>
        </ul>
      </div>
      <WrappedImage src={Pattern} layout='fixed' alt='' className={classes.pattern} />
    </footer>
  )
}

export default Footer
