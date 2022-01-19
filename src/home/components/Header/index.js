import { forwardRef, useState } from 'react'
import Link from 'next/link'

import SVGIcon from 'main_app/components/SVGIcon'
import ClutchWidget from 'main_app/components/ClutchWidget'
import imgHeader from 'assets/home/header/background.png'

import classes from './styles.module.scss'
import Image from 'next/image'
import classNames from 'classnames'

function Header (props, ref) {
  const [isPlaceholderLoading, setIsPlaceholderLoading] = useState(true)
  const [isClutchLoading, setIsClutchLoading] = useState(true)

  const clutch = (
    <ClutchWidget
      className={classes.clutchWidget}
      variant='dark'
      onLoad={() => setIsClutchLoading(false)}
    />
  )

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
        <Link to='#services' smooth className={classes.arrowMobile}>
          <SVGIcon name='home/header/arrow' />
          <div className={classes.scrollTextMobile}>scroll down</div>
        </Link>
        <div className={classNames(classes.clutchCircleMobile, {
          [classes.loading]: isClutchLoading
        })}>
          {clutch}
          <div className={classes.filledCircleMobile} />
          <div className={classes.emptyCircleMobile} />
          <div className={classes.smallCircleMobile} />
        </div>
      </div>
      <Link to='#services' smooth className={classes.arrow}>
        <SVGIcon name='home/header/arrow' />
        <div className={classes.scrollText}>scroll down</div>
      </Link>
      <div className={classNames(classes.clutchCircle, {
        [classes.loading]: isClutchLoading
      })}>
        {clutch}
      </div>
      <div className={classNames(classes.decorationWrapper, {
        [classes.placeholderLoading]: isPlaceholderLoading,
        [classes.clutchLoading]: isClutchLoading
      })}>
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
        <div className={classNames(classes.filledCircle, classes.clutchDecoration)} />
        <div className={classNames(classes.emptyCircle, classes.clutchDecoration)} />
        <div className={classNames(classes.smallCircle, classes.clutchDecoration)} />
      </div>
    </section>
  )
}

export default forwardRef(Header)
