import { useLocation } from 'react-router-dom'
import Benefit from './components/Benefit'
import DecorationWebDev from './components/DecorationWebDev'
import DecorationStaff from './components/DecorationStaff'
import iconCostReduction from 'assets/services/icon-cost-reduction.svg'
import iconExperts from 'assets/services/icon-experts.svg'
import iconTime from 'assets/services/icon-time.svg'
import iconRecruitmentCost from 'assets/services/icon-recruitment-cost.svg'
import iconAgile from 'assets/services/icon-agile.svg'
import background from 'assets/services/background-key-featured-benefits.png'

import classes from './benefits.module.scss'

function Benefits() {
  const location = useLocation()
  const path = location.pathname
  const isWebDev = path === '/services/web-development'
  const isStaff = path === '/services/staff-augmentation'
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <p className={classes.keyFeatured}>Key featured</p>
          <h2 className={classes.titleText}>Benefits</h2>
          <hr className={classes.horizontalBar} />
        </div>
        <div className={classes.row}>
          <Benefit className={classes.col3Items} image={iconCostReduction} text="Cost and risk reduction" />
          <Benefit className={classes.col3Items} image={iconTime} text="More time to prioritize your own project" />
          <Benefit className={classes.col3Items} image={iconExperts} text="Highly skilled experts with a proficient english level" />
        </div>
        <div className={`${classes.row} ${classes.row2}`}>
          <Benefit className={classes.col2Items} image={iconRecruitmentCost} text="No recruitment cost" />
          <Benefit className={classes.col2Items} image={iconAgile} text="Agile scale up/down" />
        </div>
      </div>
      <img className={classes.background} src={background} alt="" />
      { isWebDev && <DecorationWebDev />}
      { isStaff && <DecorationStaff />}
    </>
  )
}

export default Benefits
