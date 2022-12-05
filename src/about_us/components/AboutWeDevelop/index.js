import classNames from 'classnames'
import { useState } from 'react'

import Button from 'main_app/components/Button'
import ClutchRectangle from 'main_app/components/ClutchRectangle'
import InternalLink from 'main_app/components/InternalLink'

import BlueGradientBackground from 'assets/about_us/about_wedevelop/blue_gradient_background.component.svg'

import classes from './styles.module.scss'

export default function AboutWeDevelop ({ ctaLink }) {
  const [isClutchLoaded, setIsClutchLoaded] = useState(false)

  return (
    <section className={classes.aboutWeDevelop}>
      <div className={classes.header}>
        <h2 className={classes.titleText}>About WeDevelop</h2>
        <hr className={classes.horizontalBar} />
        <div className={classNames(classes.clutchWidget, {
          [classes.loading]: !isClutchLoaded
        })}
        >
          <ClutchRectangle
            isClutchLoaded={isClutchLoaded}
            setIsClutchLoaded={setIsClutchLoaded}
            className={classes.clutchRectangle}
          />
        </div>
        <Button
          as={InternalLink}
          href={ctaLink}
          isAnchor
          variant='primary'
          className={classes.ctaButton}
        >
          Contact Us Today
        </Button>
      </div>
      <div className={classes.content}>
        <p><span>Since 2019</span>, we have <span>connected top talented engineers with US tech projects.</span></p>
        <p>WeDevelop takes pride in being a <span>human-centered company that delivers outstanding results.</span></p>
        <p>
          Our clients and staff are at the forefront of everything we do,
          <span> guided by our values of transparency, collaboration, and team play. </span>
        </p>
      </div>
      <BlueGradientBackground
        className={classes.background}
        viewBox='0 0 1680.012 810.61322'
        preserveAspectRatio='xMidYMid slice'
      />
    </section>
  )
}
