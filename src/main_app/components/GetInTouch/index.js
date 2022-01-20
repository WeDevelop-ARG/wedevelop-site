import InternalLink from 'main_app/components/InternalLink'


import Button from 'main_app/components/Button'

import DotsPattern from 'assets/home/dots_pattern.svg'

import classes from './styles.module.scss'
import Image from 'next/image'

function GetInTouch ({ contactPagePath }) {
  return (
    <>
      <section className={classes.getInTouch}>
        <Image src={DotsPattern} alt='' className={classes.leftPattern} aria-hidden='true' />
        <div className={classes.sectionContent}>
          <p className={classes.subheadingText}>Get in touch</p>
          <h2 className={classes.titleText}>Schedule a call with us</h2>
          <p className={classes.descriptionText}>
            We look forward to learning how WeDevelop can help you and your business
          </p>
          <hr className={classes.horizontalBar} />
          <Button
            as={InternalLink}
            href={contactPagePath}
            smooth
            isAnchor
            variant='primary'
            className={classes.buttonTalk}
          >
            Get in Touch
          </Button>
        </div>
        <Image src={DotsPattern} alt='' className={classes.rightPattern} aria-hidden='true' />
      </section>
    </>
  )
}

export default GetInTouch
