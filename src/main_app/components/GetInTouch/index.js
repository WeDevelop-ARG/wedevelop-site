import classNames from 'classnames'
import isNil from 'lodash/isNil'

import Button from 'main_app/components/Button'
import InternalLink from 'main_app/components/InternalLink'
import WrappedImage from 'main_app/components/WrappedImage'

import DotsPattern from 'assets/home/dots_pattern.svg'

import classes from './styles.module.scss'

function GetInTouch ({ heading, title, description, ctaButtonText, contactPagePath, className }) {
  return (
    <>
      <section className={classes.getInTouch}>
        <WrappedImage src={DotsPattern} layout='intrinsic' alt='' className={classes.leftPattern} aria-hidden='true' />
        <div className={classNames(classes.sectionContent, className)}>
          <p className={classes.subheadingText}>{!isNil(heading) ? heading : 'Get in touch'}</p>
          <h2 className={classes.titleText}>{!isNil(title) ? title : 'Schedule a call with us'}</h2>
          <p className={classes.descriptionText}>
            {!isNil(description)
              ? description
              : 'We look forward to learning how WeDevelop can help you and your business'}
          </p>
          <hr className={classes.horizontalBar} />
          <Button
            as={InternalLink}
            href={contactPagePath}
            isAnchor
            variant='primary'
            className={classes.buttonTalk}
            link={{ scroll: false, shallow: true }}
          >
            {!isNil(ctaButtonText) ? ctaButtonText : 'Get in Touch'}
          </Button>
        </div>
        <WrappedImage src={DotsPattern} layout='intrinsic' alt='' className={classes.rightPattern} aria-hidden='true' />
      </section>
    </>
  )
}

export default GetInTouch
