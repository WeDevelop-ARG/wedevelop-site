import InternalLink from 'main_app/components/InternalLink'

import Button from 'main_app/components/Button'

import patternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import classes from './schedule.module.scss'
import WrappedImage from 'main_app/components/WrappedImage'
import useGetScheduleData from './hooks/useGetScheduleData'

function Schedule ({ contactPagePath, className, page }) {
  const { renderTitleDescription, getHeadingText, getCTAText } = useGetScheduleData(page)

  return (
    <>
      <section id='contact-us' className={className}>
        <div className={classes.container}>
          <p className={classes.heading}>{getHeadingText()}</p>
          {renderTitleDescription()}
          <hr className={classes.horizontalBar} />
          <Button
            as={InternalLink}
            href={contactPagePath}
            isAnchor
            variant='primary'
            link={{ scroll: false, shallow: true }}
          >
            {getCTAText()}
          </Button>
        </div>
        <WrappedImage className={classes.patternHorizontalLeft} src={patternHorizontal} alt='' />
        <WrappedImage className={classes.patternHorizontalRight} src={patternHorizontal} alt='' />
      </section>
    </>
  )
}

export default Schedule
