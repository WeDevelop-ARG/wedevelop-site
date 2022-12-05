import { useState } from 'react'
import classNames from 'classnames'

import WrappedImage from 'main_app/components/WrappedImage'
import Button from 'main_app/components/Button'
import InternalLink from 'main_app/components/InternalLink'
import Image from 'main_app/components/Image'

import menListening from 'assets/services/how_we_hire/backgrounds/men-listening.png'
import rightArrow from 'assets/about_us/nearshore_outsourcing/right_arrow.svg'
import decoElements from 'assets/services/how_we_hire/decorations/deco-elements.svg'

import classes from './styles.module.scss'

export default function OurCulture () {
  const [seeMoreButtonClicked, setSeeMoreButtonClicked] = useState(false)

  return (
    <>
      <section className={classes.ourCulture}>
        <div className={classes.content}>
          <div className={classes.title}>
            <div className={classes.sectionTitle}>
              <h2>Our Culture</h2>
              <p className={classes.subtitle}>
                Here at WeDevelop, we pride ourselves
                on being more than your average tech company.
              </p>
              <hr className={classes.horizontalBar} />
            </div>
            <Button
              as={InternalLink}
              href='/services/how-we-hire/contact'
              className={classes.getInTouchButton}
            >
              Get In Touch
            </Button>
          </div>
          <div className={classes.featureText}>
            <p>
              The WeDevelop community stands out for loving what we do.
              <b> Our inquisitive nature sets us ahead of the game and enables
                us to stay on edge
              </b>. Our indomitable spirits and relentlessness
              have us seeking out excellence. With our always-be-learning
              mindset, mistakes become opportunities to grow and learn.
            </p>
            <br />
            <p>
              <b>There is no “I” in “team” here at WeDevelop, as we work as a
                Dream Team
              </b>. And there is no better team than one that creates
              room for all ideas and empowering all voices. Equity and
              inclusion mark our way, and everyone is a key player.
            </p>
            {seeMoreButtonClicked && (
              <>
                <br />
                <p>
                  Our company is built on solid grounds. At WeDevelop, we value
                  transparency and allow for complete visibility of information.
                  Trust is embedded in our ethos, guiding our every move, and relies
                  on our proactive, clear, and efficient communication. Above all
                  else,
                  <b>
                    &nbsp;we are a company that always puts people first, creating a
                    healthy workplace for our talents to thrive.
                  </b>
                </p>
              </>
            )}
            <Button variant='link' onClick={() => setSeeMoreButtonClicked(!seeMoreButtonClicked)} className={classes.seeMoreButton}>
              <div className={classes.buttonContainer}>
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
        </div>
        <WrappedImage src={decoElements} layout='intrinsic' className={classes.decoElements} />
      </section>
      <WrappedImage src={menListening} alt='' layout='responsive' className={classes.backgroundImage} />
    </>
  )
}
