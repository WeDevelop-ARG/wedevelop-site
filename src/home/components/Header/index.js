import { forwardRef, useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import SVGIcon from 'main_app/components/SVGIcon'
import ClutchRectangle from 'main_app/components/ClutchRectangle'
import imgHeader from 'assets/home/header/background.png'

import classes from './styles.module.scss'
import Image from 'main_app/components/Image'
import classNames from 'classnames'

function Header (props, ref) {
  const [isPlaceholderLoading, setIsPlaceholderLoading] = useState(true)
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
        <HashLink to='#services' smooth className={classes.arrowMobile}>
          <SVGIcon name='home/header/arrow' />
          <div className={classes.scrollTextMobile}>scroll down</div>
        </HashLink>
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
      <HashLink to='#services' smooth className={classes.arrow}>
        <SVGIcon name='home/header/arrow' />
        <div className={classes.scrollText}>scroll down</div>
      </HashLink>
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
        [classes.placeholderLoading]: isPlaceholderLoading,
        [classes.clutchLoading]: !isClutchLoaded
      })}
      >
        <Image
          src={imgHeader}
          alt=''
          loading='eager'
          objectFit='cover'
          position='bottom'
          placeholderColor='#000'
          onPlaceholderImageLoad={() => setIsPlaceholderLoading(false)}
        />
        <div className={classNames(classes.halfCircle, classes.decoration)}>
          <SVGIcon name='home/header/half_circle' />
        </div>
        <div className={classNames(classes.pattern, classes.decoration)}>
          <SVGIcon name='home/header/pattern' />
        </div>
      </div>
    </section>
  )
}

export default forwardRef(Header)
