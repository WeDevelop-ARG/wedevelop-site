import { forwardRef } from 'react'
import { HashLink } from 'react-router-hash-link'

import SVGIcon from 'main_app/components/SVGIcon'
import ClutchWidget from 'main_app/components/ClutchWidget'
import imgHeader from 'assets/home/header/background.png'

import classes from './styles.module.scss'
import Image from 'main_app/components/Image'

function Header (props, ref) {
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
      </div>
      <HashLink to='#services' smooth className={classes.arrow}>
        <SVGIcon name='home/header/arrow' />
        <div className={classes.scrollText}>scroll down</div>
      </HashLink>
      <div className={classes.clutchCircle}>
        <ClutchWidget className={classes.clutchWidget} variant='dark' />
      </div>
      <div className={classes.decorationWrapper}>
        <Image
          src={imgHeader}
          alt=''
          loading='eager'
          objectFit='cover'
          position='bottom'
          placeholderColor='#333'
          className={classes.imgHeader}
        />
        <div className={classes.halfCircle}>
          <SVGIcon name='home/header/half_circle' />
        </div>
        <div className={classes.pattern}>
          <SVGIcon name='home/header/pattern' />
        </div>
        <div className={classes.filledCircle} />
        <div className={classes.emptyCircle} />
        <div className={classes.smallCircle} />
      </div>
    </section>
  )
}

export default forwardRef(Header)
