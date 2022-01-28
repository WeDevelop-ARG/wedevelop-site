import InternalLink from 'main_app/components/InternalLink'

import Button from 'main_app/components/Button'
import WebDevTitleDescription from './components/WebDevTitleDescription'
import StaffAugTitleDescription from './components/StaffAugTitleDescription'

import patternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import classes from './schedule.module.scss'
import WrappedImage from 'main_app/components/WrappedImage'

function Schedule ({ contactPagePath, className, service }) {
  const renderTitleDescription = (service) => {
    if (service === 'staff-augmentation') return (<StaffAugTitleDescription />)
    return (<WebDevTitleDescription />)
  }
  return (
    <>
      <section className={className}>
        <div className={classes.container}>
          <p className={classes.heading}>Get in touch</p>
          {renderTitleDescription(service)}
          <hr className={classes.horizontalBar} />
          <Button
            as={InternalLink}
            href={contactPagePath}
            isAnchor
            variant='primary'
          >
            Get in Touch
          </Button>
        </div>
        <WrappedImage className={classes.patternHorizontalLeft} src={patternHorizontal} alt='' />
        <WrappedImage className={classes.patternHorizontalRight} src={patternHorizontal} alt='' />
      </section>
    </>
  )
}

export default Schedule
