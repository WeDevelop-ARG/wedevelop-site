import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'

import DotsPattern from 'assets/home/dots_pattern.svg'
import Picture1 from 'assets/home/picture_wall_1.png'
import Picture2 from 'assets/home/picture_wall_2.png'
import Picture3 from 'assets/home/picture_wall_3.png'
import Picture4 from 'assets/home/picture_wall_4.png'

import classes from './styles.module.scss'

function GetInTouch () {
  return (
    <>
      <section className={classes.getInTouch}>
        <img src={DotsPattern} alt='' className={classes.leftPattern} aria-hidden='true' />
        <div className={classes.sectionContent}>
          <p className={classes.subheadingText}>Get in touch</p>
          <h2 className={classes.titleText}>Schedule a call with us</h2>
          <p className={classes.descriptionText}>
            We look forward to learning how WeDevelop can help you and your business
          </p>
          <hr className={classes.horizontalBar} />
          <Button
            as={HashLink}
            to='/contact'
            smooth
            isAnchor
            variant='primary'
            className={classes.buttonTalk}
          >
            Get in Touch
          </Button>
        </div>
        <img src={DotsPattern} alt='' className={classes.rightPattern} aria-hidden='true' />
      </section>
      <div className={classes.pictureWall}>
        <img src={Picture1} alt='' />
        <img src={Picture2} alt='' />
        <img src={Picture3} alt='' />
        <img src={Picture4} alt='' />
      </div>
    </>
  )
}

export default GetInTouch
