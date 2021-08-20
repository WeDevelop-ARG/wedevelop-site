import iconCostReduction from 'assets/services/icon-cost-reduction.svg'
import iconExperts from 'assets/services/icon-experts.svg'
import iconTime from 'assets/services/icon-time.svg'
import iconRecruitmentCost from 'assets/services/icon-recruitment-cost.svg'
import iconAgile from 'assets/services/icon-agile.svg'
import backgroundKeyBenefits from 'assets/services/background_key_featured_benefits.png'
import Benefit from './components/Benefit'

import classes from './benefits.module.scss'


function Benefits() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p className={classes.keyFeatured}>Key featured</p>
        <h3 className={classes.titleText}>Benefits</h3>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.row}>
        <Benefit className={classes.col3Items} image={iconCostReduction} text="Cost and risk reduction" />
        <Benefit className={classes.col3Items} image={iconTime} text="More time to prioritize your own project" />
        <Benefit className={classes.col3Items} image={iconExperts} text="Highly skilled experts with a proficient english level" />
      </div>
      <div className={classes.row}>
        <Benefit className={classes.col2Items} image={iconRecruitmentCost} text="No recruitment cost" />
        <Benefit className={classes.col2Items} image={iconAgile} text="Agile scale up/down" />
      </div>
      <img className={classes.background} src={backgroundKeyBenefits} alt="" />
    </div>
  )
}

export default Benefits
