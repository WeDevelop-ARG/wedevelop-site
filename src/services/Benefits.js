import iconCostReduction from 'assets/services/icon-cost-reduction.svg'
import iconExperts from 'assets/services/icon-experts.svg'
import iconTime from 'assets/services/icon-time.svg'
import iconRecruitmentCost from 'assets/services/icon-recruitment-cost.svg'
import iconAgile from 'assets/services/icon-agile.svg'
import backgroundKeyBenefits from 'assets/services/background_key_featured_benefits.png'

function Benefit({ image, text }) {
  return (
    <div>
      <img src={image} alt="" />
      {text}
    </div>)
}

function Benefits() {
  return (
    <>
      <p>Key featured</p>
      <h3>Benefits</h3>
      <div>
        <Benefit image={iconCostReduction} text="Cost and risk reduction" />
        <Benefit image={iconTime} text="More time to prioritize your own project" />
        <Benefit image={iconExperts} text="Highly skilled experts with a proficient english level" />
        <Benefit image={iconRecruitmentCost} text="No recruitment cost" />
        <Benefit image={iconAgile} text="Agile scale up/down" />
      </div>
      <img src={backgroundKeyBenefits} alt="" />
    </>
  )
}

export default Benefits
