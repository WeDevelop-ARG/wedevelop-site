import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'
import InternalLink from 'main_app/components/InternalLink'
import WrappedImage from 'main_app/components/WrappedImage'

import DotsPattern from 'assets/about_us/dots_pattern.svg'
import BlueRightArrow from 'assets/about_us/our_company/blue-right-arrow.svg'
import DecoCircle from 'assets/about_us/our_company/deco-circle.svg'
import WeDevs from 'assets/about_us/our_company/wedevs.png'

import classes from './styles.module.scss'

function OurCompany () {
  return (
    <>
      <section id='our-company' className={classes.ourCompany}>
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>Our company</p>
          <h2 className={classes.titleText}>About Us</h2>
          <p className={classes.descriptionText}>
            Providing a more enjoyable life for people and
            being the company everyone wants to work with.
          </p>
          <hr className={classes.horizontalBar} />
        </div>
        <div className={classes.firstTextBlock}>
          <p>
            We are WeDevelop, a cutting-edge IT Staff-augmentation and technology solution
            company committed to excellence. Since 2019,
            <span>&nbsp;we have assembled a diverse and top-talented team of engineers from Latin America.</span>
            &nbsp;WeDevelop excels at delivering Software Development Services and catering to
            clients’ needs, expertly scaling their tech teams, and delivering innovative
            projects with an agile mindset.
          </p>
        </div>
        <div className={classes.filledCircle} aria-hidden='true' />
        <div className={classes.emptyCircle} aria-hidden='true' />
        <div className={classes.smallBlurCircle} aria-hidden='true' />
        <div className={classes.emptySemiCircle} aria-hidden='true' />
        <WrappedImage src={DotsPattern} alt='' layout='intrinsic' className={classes.topRightDotsPattern} aria-hidden='true' />
      </section>
      <WrappedImage src={DotsPattern} alt='' layout='responsive' className={classes.topLeftDotsPattern} aria-hidden='true' />
      <WrappedImage src={WeDevs} alt='' layout='responsive' className={classes.backgroundImg} />
      <section className={classes.ourCompanyBottom}>
        <div className={classes.lastTextBlock}>
          <p>
            However, we are not your average IT Staff-augmentation business. As a human-centered company,
            <span>&nbsp;we care for client satisfaction while promoting staff well-being. Teamwork, transparency, and collaboration are our mottos.</span>
            &nbsp;Resilience and flexibility, our leading values. Our indomitable spirits and curious minds
            drive our team to always strive for excellence.
          </p>
          <Button
            as={InternalLink}
            variant='link'
            href='/services/hiring-solutions'
            isAnchor
            iconRight={<Image src={BlueRightArrow} alt='' />}
            className={classes.goToStaffAugService}
          >
            Learn More About Staff Augmentation Services
          </Button>
        </div>
        <WrappedImage src={DotsPattern} alt='' layout='intrinsic' className={classes.bottomRightDotsPattern} aria-hidden='true' />
        <WrappedImage src={DecoCircle} alt='' layout='intrinsic' className={classes.bottomLeftDecoCircle} aria-hidden='true' />
      </section>
    </>
  )
}

export default OurCompany
