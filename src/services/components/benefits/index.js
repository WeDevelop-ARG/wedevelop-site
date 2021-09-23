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

function Benefits ({ service, className }) {
  const renderDecoration = service => {
    if (service === 'staff-augmentation') return (<DecorationStaff />)
    return (<DecorationWebDev />)
  }
  return (
    <>
      <section className={className}>
        <div className={classes.header}>
          <p className={classes.keyFeatured}>Key featured</p>
          <h2 className={classes.titleText}>Benefits</h2>
          <hr className={classes.horizontalBar} />
        </div>
        <div className={classes.benefitsContainer}>
          <Benefit className={classes.benefit} image={iconCostReduction} text='Cost and risk reduction' />
          <Benefit className={classes.benefit} image={iconTime} text='More time to prioritize your own project' />
          <Benefit className={classes.benefit} image={iconExperts} text='Highly skilled experts with a proficient english level' />
          <Benefit className={classes.benefit} image={iconRecruitmentCost} text='No recruitment cost' />
          <Benefit className={classes.benefit} image={iconAgile} text='Agile scale up/down' />
        </div>
        {renderDecoration(service)}
      </section>
      <img className={classes.background} src={background} alt='' />
    </>
  )
}

export default Benefits
