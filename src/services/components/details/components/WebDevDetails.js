import { useWebDevDetails } from '../hooks/useWebDevDetails'
import { HashLink } from 'react-router-hash-link'
import Button from 'main_app/components/Button'

import Pattern from 'assets/services/dots-pattern.svg'
import Circle from 'assets/services/details-web-deco-circle.svg'

import classes from './webDevDetails.module.scss'
import Image from 'main_app/components/Image'

function WebDevDetails ({ contactPagePath }) {
  const { servicesList, DescriptionText } = useWebDevDetails()
  return (
    <>
      <div className={classes.row}>
        <div className={classes.columnLeft}>
          <DescriptionText />
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
        <ul className={classes.list}>
          {servicesList.map(service => (
            <li key={service.name} className={classes.listItem}>{service.name}</li>
          ))}
        </ul>
      </div>
      <Image className={classes.decoPattern} src={Pattern} alt='' />
      <Image className={classes.decoCircle} src={Circle} alt='' />
    </>
  )
}

export default WebDevDetails
