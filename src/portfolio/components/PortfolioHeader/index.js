import HeaderCup from 'assets/portfolio/header_cup.svg'
import PortfolioHeaderBackground from 'assets/portfolio/portfolio_header_background.svg'
import SmallBlurredCircle from 'assets/portfolio/small_blurred_circle.png'
import WhiteDotsPattern from 'assets/portfolio/white_dots_pattern.svg'
import WhiteDotsPatternMobile from 'assets/portfolio/white_dots_pattern_mobile.svg'

import classes from './styles.module.scss'
import WrappedImage from 'main_app/components/WrappedImage'

function PortfolioHeader () {
  return (
    <>
      <section className={classes.headerContainer}>
        <div className={classes.backgroundContainer}>
          <WrappedImage layout='fill' objectFit='cover' objectPosition='bottom' src={PortfolioHeaderBackground} alt='' className={classes.background} />
        </div>
        <WrappedImage src={WhiteDotsPattern} alt='' className={classes.dotsPattern} />
        <WrappedImage
          src={WhiteDotsPatternMobile}
          alt=''
          className={classes.dotsPatternMobile}
        />
        <WrappedImage
          src={SmallBlurredCircle}
          alt=''
          className={classes.smallBlurredCircle}
        />
        <div className={classes.columnsContainer}>
          <div className={classes.leftSideContainer}>
            <div className={classes.leftSideContent}>
              <p className={classes.headingText}>success stories</p>
              <h2 className={classes.titleText}>
                Discover our success stories
              </h2>
              <p className={classes.descriptionText}>
                Straight 5-star ratings endorse our work
              </p>
              <hr className={classes.horizontalBar} />
            </div>
          </div>
          <div className={classes.rightSideContainer}>
            <WrappedImage
              src={HeaderCup}
              alt=''
              className={classes.headerCup}
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioHeader
