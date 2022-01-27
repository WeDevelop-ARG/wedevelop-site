import { forwardRef, useState } from 'react'
import Image from 'main_app/components/Image'
import classNames from 'classnames'

import InternalLink from 'main_app/components/InternalLink'

import ClutchRectangle from 'main_app/components/ClutchRectangle'

import imgHeader from 'assets/home/header/background.png'
import Arrow from 'assets/home/header/arrow.svg'
import HalfCircle from 'assets/home/header/half_circle.svg'
import Pattern from 'assets/home/header/pattern.svg'

import classes from './styles.module.scss'

function Header (props, ref) {
  const [isBackgroundLoading, setIsBackgroundLoading] = useState(true)
  const [isClutchLoaded, setIsClutchLoaded] = useState(false)

  return (
    <section ref={ref} className={classes.headerContainer}>
      <div className={classes.content}>
        <h1 className={classes.title}>
          <p className={classes.firstLine}>
            A <b>human-centered company <br /></b>
            that gets things done efficiently
          </p>
        </h1>
        <p className={classes.text}>
          We are a digital product agency that delivers meaningful
          <br />experiences to clients and users all over the world.
        </p>
        <hr className={classes.divider} />
        <InternalLink href='#services' className={classes.arrowMobile}>
          <Image src={Arrow} layout='fixed' alt='' />
          <div className={classes.scrollTextMobile}>scroll down</div>
        </InternalLink>
        <div className={classNames(classes.clutchRectangleMobile, {
          [classes.loading]: !isClutchLoaded
        })}
        >
          <ClutchRectangle
            isClutchLoaded={isClutchLoaded}
            setIsClutchLoaded={setIsClutchLoaded}
          />
        </div>
      </div>
      <InternalLink href='#services' smooth="true" className={classes.arrow}>
        <Image src={Arrow} layout='fixed' alt='' />
        <div className={classes.scrollText}>scroll down</div>
      </InternalLink>
      <div className={classNames(classes.clutchRectangle, {
        [classes.loading]: !isClutchLoaded
      })}
      >
        <ClutchRectangle
          isClutchLoaded={isClutchLoaded}
          setIsClutchLoaded={setIsClutchLoaded}
        />
      </div>
      <div className={classNames(classes.decorationWrapper, {
        [classes.placeholderLoading]: isBackgroundLoading,
        [classes.clutchLoading]: !isClutchLoaded
      })}
      >
        <Image
          src={imgHeader}
          alt=''
          layout='fill'
          loading='eager'
          objectFit='cover'
          objectPosition='bottom'
          placeholder='blur'
          onLoadingComplete={() => setIsBackgroundLoading(false)}
        />
        <div className={classNames(classes.halfCircle, classes.decoration)}>
          <Image src={HalfCircle} layout='fixed' alt='' />
        </div>
        <div className={classNames(classes.pattern, classes.decoration)}>
          <Image src={Pattern} layout='fixed' alt='' />
        </div>
      </div>
    </section>
  )
}

export default forwardRef(Header)
