import Image from 'main_app/components/Image'

import HeaderCup from 'assets/portfolio/header_cup.svg'
import PortfolioHeaderBackground from 'assets/portfolio/portfolio_header_background.svg'
import SmallBlurredCircle from 'assets/portfolio/small_blurred_circle.png'
import WhiteDotsPattern from 'assets/portfolio/white_dots_pattern.svg'
import WhiteDotsPatternMobile from 'assets/portfolio/white_dots_pattern_mobile.svg'

import classes from './styles.module.scss'

function PortfolioHeader () {
  return (
    <>
      <section className={classes.headerContainer}>
        <div className={classes.backgroundContainer}>
          <Image src={PortfolioHeaderBackground} alt='' className={classes.background} />
        </div>
        <Image src={WhiteDotsPattern} alt='' className={classes.dotsPattern} />
        <Image src={WhiteDotsPatternMobile} alt='' className={classes.dotsPatternMobile} />
        <Image src={SmallBlurredCircle} alt='' className={classes.smallBlurredCircle} />
        <div className={classes.columnsContainer}>
          <div className={classes.leftSideContainer}>
            <div className={classes.leftSideContent}>
              <p className={classes.headingText}>success stories</p>
              <h2 className={classes.titleText}>
                Discover more about us looking at our porfolio
              </h2>
              <p className={classes.descriptionText}>More than 20 companies have trust on us!</p>
              <hr className={classes.horizontalBar} />
            </div>
          </div>
          <div className={classes.rightSideContainer}>
            <Image src={HeaderCup} alt='' className={classes.headerCup} />
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioHeader
