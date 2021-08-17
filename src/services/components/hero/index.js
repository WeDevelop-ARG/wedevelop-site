import { HashLink } from 'react-router-hash-link'
import Button from 'main_app/components/Button'
import classes from './heroStyles.module.scss'

function Hero({ icon, photo, background, pattern, title, description }) {
  return (
    <div>
      <div className={classes.flex}>
        <div className={classes.colLeft}>
          <img className={classes.icon} src={icon} alt='' />

          <h3>{title}</h3>
          <p>
            {description}
          </p>
          <hr className={classes.horizontalBar} />
          <Button
            as={HashLink}
            to='/contact'
            smooth
            isAnchor
            variant='primary'
          >
            Get in Touch
    </Button>
        </div>
        <div>
          <img className="" src={photo} alt='' />
        </div>
        <div>
          <img className="" src={pattern} alt='' />
        </div>
      </div>
      <img className="" src={background} alt='' />

    </div>
  )
}

export default Hero
