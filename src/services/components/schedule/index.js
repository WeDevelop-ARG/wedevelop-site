import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'
import WebDevTitleDescription from './components/WebDevTitleDescription'
import StaffAugTitleDescription from './components/StaffAugTitleDescription'

import patternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import classes from './schedule.module.scss'
import Image from 'main_app/components/Image'

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
            as={HashLink}
            to={contactPagePath}
            smooth
            isAnchor
            variant='primary'
          >
            Get in Touch
          </Button>
        </div>
        <Image className={classes.patternHorizontalLeft} src={patternHorizontal} alt='' />
        <Image className={classes.patternHorizontalRight} src={patternHorizontal} alt='' />
      </section>
    </>
  )
}

export default Schedule
