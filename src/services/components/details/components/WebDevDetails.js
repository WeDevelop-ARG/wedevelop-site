import { useWebDevDetails } from '../hooks/useWebDevDetails'
import InternalLink from 'main_app/components/InternalLink'
import Button from 'main_app/components/Button'

import Pattern from 'assets/services/dots-pattern.svg'
import Circle from 'assets/services/details-web-deco-circle.svg'

import WrappedImage from 'main_app/components/WrappedImage'
import classes from './webDevDetails.module.scss'

function WebDevDetails ({ contactPagePath }) {
  const { servicesList, DescriptionText } = useWebDevDetails()
  return (
    <>
      <div className={classes.row}>
        <div className={classes.columnLeft}>
          <DescriptionText />
          <Button
            as={InternalLink}
            href={contactPagePath}
            smooth
            isAnchor
            variant='primary'
            className={classes.getInTouchBtn}
          >
            Get in Touch
          </Button>
        </div>
        <ul className={classes.list}>
          {servicesList.map(service => (
            <li key={service.name} className={classes.listItem}>{service.name}</li>
          ))}
        </ul>
      </div>
      <WrappedImage className={classes.decoPattern} src={Pattern} alt='' />
      <WrappedImage className={classes.decoCircle} src={Circle} alt='' />
    </>
  )
}

export default WebDevDetails
