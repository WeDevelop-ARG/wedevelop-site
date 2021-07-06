import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'
import ListRow from './ListRow'

import useRandonNumber from './use_random_number'

import classes from './styles.module.scss'

function AvailableDevs ({ title, devs }) {
  return (
    <section className={classes.availableDevs}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.devsList}>
        {devs.map(({ id, devImgURL, devRole, techLogoURL, devDescription, devRate }) => (
          <ListRow
            key={id}
            devImgURL={devImgURL}
            devRole={devRole}
            techLogoURL={techLogoURL}
            devDescription={devDescription}
            devRate={devRate}
          />
        ))}
        <div className={classes.moreOnBench}>
          <p>{useRandonNumber(6, 15)} more on bench</p>
        </div>
      </div>
      <Button
        as={HashLink}
        to='#top'
        smooth
        className={classes.getRatesButton}
      >
        Get rates & profiles
      </Button>
    </section>
  )
}

export default AvailableDevs
