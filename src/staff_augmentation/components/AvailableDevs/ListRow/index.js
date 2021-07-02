import SVGIcon from 'main_app/components/SVGIcon'

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
        <SVGIcon name='hire_developers/search_solid' className={classes.magnifier} />
      </li>
    </ul>
  )
}

export default ListRow
