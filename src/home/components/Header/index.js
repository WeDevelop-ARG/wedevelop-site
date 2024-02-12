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
import Button from 'main_app/components/Button'

function Header (props, ref) {
  const [isBackgroundLoading, setIsBackgroundLoading] = useState(true)
  const [isClutchLoaded, setIsClutchLoaded] = useState(false)

  return (
    <section ref={ref} className={classes.headerContainer}>
      <div className={classes.content}>
        <h1 className={classes.title}>
          <p className={classes.firstLine}>
            <b>Hire Software Engineers in Your Timezone<br /></b>
          </p>
        </h1>
        <p className={classes.text}>
          Your reliable route to top-tier nearshore developers
        </p>
        <hr className={classes.divider} />
        <Button
          as={InternalLink}
          href='/contact'
          className={classes.letsTalkButton}
        >
          Inquire
        </Button>
        <InternalLink href='#hiring-solutions-service' className={classes.arrowMobile}>
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
      <InternalLink href='#hiring-solutions-service' className={classes.arrowDesktop}>
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
