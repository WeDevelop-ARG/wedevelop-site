import { useWebDevDetails } from '../hooks/useWebDevDetails'
import { HashLink } from 'react-router-hash-link'
import Button from 'main_app/components/Button'

import Pattern from 'assets/services/dots-pattern.svg'
import Circle from 'assets/services/details-web-deco-circle.svg'


import classes from './webDevDetails.module.scss'

function WebDevDetails() {
  const { servicesList, DescriptionText } = useWebDevDetails()
  return (
    <>
    <div className={classes.row}>
      <div className={classes.column}>
        <DescriptionText />
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
      <div className={classes.column}>
        <ul className={classes.list}>
          {servicesList.map(service => (
            <li key={service.name} className={classes.listItem}>{service.name}</li>
          ))}
        </ul>
      </div>
    </div>
      <img className={classes.decoPattern} src={Pattern} alt='' />
      <img className={classes.decoPatternRight} src={Pattern} alt='' />
      <img className={classes.decoCircle} src={Circle} alt='' />
    </>
  )
}

export default WebDevDetails
