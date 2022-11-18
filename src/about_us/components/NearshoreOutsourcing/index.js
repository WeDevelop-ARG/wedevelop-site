import { useState } from 'react'
import classNames from 'classnames'

import WrappedImage from 'main_app/components/WrappedImage'
import handsOnComputer from 'assets/about_us/nearshore_outsourcing/background.png'
import DotsPattern from 'assets/about_us/dots_pattern.svg'
import rightArrow from 'assets/about_us/nearshore_outsourcing/right_arrow.svg'
import decoElements from 'assets/about_us/nearshore_outsourcing/deco-elements.svg'
import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'
import InternalLink from 'main_app/components/InternalLink'

import classes from './styles.module.scss'

function NearshoreOutsourcingHero () {
  const [seeMoreButtonClicked, setSeeMoreButtonClicked] = useState(false)

  return (
    <>
      <section id='nearshore-outsourcing' className={classes.nearshoreOutsourcing}>
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>Our Company</p>
          <h2 className={classes.titleText}>Nearshore Outsourcing</h2>
          <p className={classes.descriptionText}>
            The smart way to have on board the best remote talent.
          </p>
          <hr className={classes.horizontalBar} />
        </div>
        <div className={classes.textBlock}>
          <p>
            Nearshore outsourcing is a trending methodology adopted by many companies that sources the best tech professionals
            in Latin America. This methodology of remote talent-hiring has been around for several
            decades. From large to small businesses, executives opt for outsourcing to maximize their resources
            and trust their software development projects to expert hands.
          </p>
          {seeMoreButtonClicked &&
            <p>
              However, the outsourcing world presents two main variants with few similarities and
              many differences. Nearshore and offshore talent sourcing can impact your company's
              development. Therefore, you must analyze and choose carefully to make the best
              decision. Now, you can take your company to the next level cost and time efficiently with
              nearshore outsourcing and its numerous advantages.
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
        <Button
          as={InternalLink}
          href='/services/staff-augmentation'
          className={classes.discoverMoreButton}
        >
          Discover more about our Nearshore Outsourcing Services
        </Button>
        <WrappedImage src={DotsPattern} alt='' layout='intrinsic' className={classes.topRightDotsPattern} aria-hidden='true' />
        <WrappedImage src={decoElements} alt='' layout='intrinsic' className={classes.decoElements} aria-hidden='true' />
      </section>
      <WrappedImage src={handsOnComputer} alt='' layout='responsive' className={classes.backgroundImg} />
    </>
  )
}

export default NearshoreOutsourcingHero
