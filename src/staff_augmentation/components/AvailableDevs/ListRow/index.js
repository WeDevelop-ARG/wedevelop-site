import Button from 'main_app/components/Button'
import SVGIcon from 'main_app/components/SVGIcon'
import { HashLink as Link } from 'react-router-hash-link'

import classes from './styles.module.scss'

function ListRow ({
  devImgURL,
  devRole,
  techLogoURL,
  devDescription,
  devRate
}) {
  return (
    <ul className={classes.devRow}>
      <li>
        <img src={devImgURL} alt='' className={classes.profileImg} />
      </li>
      <li className={classes.roleTech}>
        <b>{devRole}</b>
        <img src={techLogoURL} alt='' className={classes.techLogo} />
      </li>
      <li className={classes.description}>
        {devDescription}
      </li>
      <li className={classes.rateMagnifier}>
        <p>$<span className={classes.profileRate}>{devRate}</span> / h</p>
        <Button variant='icon' as={Link} isAnchor smooth to='#top' className={classes.searchButton}>
          <SVGIcon name='hire_developers/search_solid' className={classes.magnifier} />
        </Button>
      </li>
    </ul>
  )
}

export default ListRow
