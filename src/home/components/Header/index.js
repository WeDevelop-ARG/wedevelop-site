import { forwardRef } from 'react'
import { useHistory } from 'react-router'
import { HashLink } from 'react-router-hash-link'

import SVGIcon from 'main_app/components/SVGIcon'
import Button from 'main_app/components/Button'
import ClutchWidget from 'main_app/components/ClutchWidget'
import imgHeader from 'assets/home/header/background.png'

import classes from './styles.module.scss'

function Header (props, ref) {
  const history = useHistory()
  return (
    <section ref={ref} className={classes.headerContainer}>
      <div className={classes.content}>
        <h3 className={classes.introTitle}>what we are</h3>
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
        <Button
          isAnchor
          variant='primary'
          className={classes.buttonContact}
          onClick={() => history.push('/contact')}
        >
          Get in Touch
        </Button>
        <div className={classes.arrow}>
          <SVGIcon name='home/header/arrow' />
          <div onClick={() => window.location.replace('/#services')}>
            <HashLink className={classes.scrollText}>scroll down</HashLink>
          </div>
        </div>
      </div>
      <div className={classes.decorationWrapper}>
        <img className={classes.imgHeader} src={imgHeader} alt='' />
        <div className={classes.halfCircle}>
          <SVGIcon name='home/header/half_circle' />
        </div>
        <div className={classes.pattern}>
          <SVGIcon name='home/header/pattern' />
        </div>
        <div className={classes.filledCircle} />
        <div className={classes.emptyCircle} />
        <div className={classes.clutchCircle}>
          <ClutchWidget className={classes.clutchWidget} variant='dark' />
        </div>
        <div className={classes.smallCircle} />
      </div>
    </section>
  )
}

export default forwardRef(Header)
