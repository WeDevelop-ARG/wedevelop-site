import { useState } from 'react'
import classNames from 'classnames'

import WrappedImage from 'main_app/components/WrappedImage'
import Button from 'main_app/components/Button'
import InternalLink from 'main_app/components/InternalLink'
import Image from 'main_app/components/Image'

import weDevs from 'assets/career/work_culture/we_devs.png'
import decoElements from 'assets/career/work_culture/deco-elements.svg'
import DotsPattern from 'assets/about_us/dots_pattern.svg'
import rightArrow from 'assets/about_us/nearshore_outsourcing/right_arrow.svg'

import classes from './styles.module.scss'

export default function OurWorkCulture () {
  const [seeMoreButtonClicked, setSeeMoreButtonClicked] = useState(false)

  return (
    <>
      <section className={classes.ourCompany}>
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>Our Company</p>
          <h2 className={classes.titleText}>Our Work Culture</h2>
          <hr className={classes.horizontalBar} />
          <p className={classes.descriptionText}>
            We help people thrive, bridging the gap between
            the best talent and opportunities.
          </p>
        </div>
        <Button
          as={InternalLink}
          href='/careers/job-openings'
        >
          Shift Your Career Future Today
        </Button>
        <div className={classes.filledCircle} aria-hidden='true' />
        <div className={classes.emptyCircle} aria-hidden='true' />
        <div className={classes.smallBlurCircle} aria-hidden='true' />
        <WrappedImage src={DotsPattern} alt='' layout='intrinsic' className={classes.topRightDotsPattern} aria-hidden='true' />
      </section>
      <WrappedImage src={weDevs} alt='' layout='responsive' className={classes.backgroundImg} />
      <section className={classes.ourCompanyBottom}>
        <div className={classes.lastTextBlock}>
          <p>
            We are more than just a tech company. We are on
            a mission to make a difference in improving people's
            career growth, helping them unlock their full potential.
            Why? Because we believe that the combination of passion
            and talent is the key to success.
          </p>
          {seeMoreButtonClicked &&
            <p>
              At WeDevelop, we foster a culture of consistent
              learning to address the ever-changing skills in
              demand within this fast-paced tech environment.
              By questioning what we know, we acquire new perspectives
              to provide a seamless hiring experience that positively
              impacts the recruitment process for every client we
              partner with. Our greatest value lies in our people
              and their unique selves. Every idea matters, and
              that’s why we embrace a human-centered approach,
              harnessing individual differences as a company strength.
            </p>}
          <Button variant='link' onClick={() => setSeeMoreButtonClicked(!seeMoreButtonClicked)}>
            <div className={classes.seeMoreButton}>
              <p className={classes.text}>See {seeMoreButtonClicked ? 'Less' : 'More'}</p>
              <Image
                src={rightArrow}
                alt='right arrow'
                className={classNames({
                  [classes.open]: seeMoreButtonClicked
                })}
              />
            </div>
          </Button>
        </div>
        <WrappedImage src={DotsPattern} alt='' layout='intrinsic' className={classes.bottomRightDotsPattern} aria-hidden='true' />
        <WrappedImage src={decoElements} alt='' layout='intrinsic' className={classes.decoElements} aria-hidden='true' />
      </section>
    </>
  )
}
