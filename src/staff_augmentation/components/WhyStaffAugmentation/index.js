import SVGIcon from 'main_app/components/SVGIcon'

function WhyStaffAugmentation () {
  return (
    <section>
      <div>
        <p>Why staff augmentation</p>
        <h2>
          <div>The extra talent needed to</div>
          <div>Boost Your Projects</div>
        </h2>
      </div>
      <div>
        <figure>
          <div>
            <SVGIcon name='staff_augmentation/team_brief' />
          </div>
          <figcaption>Dedicated Team Brief. Reduce liability and grow your business.</figcaption>
        </figure>
        <figure>
          <div>
            <SVGIcon name='staff_augmentation/candidate_screening' />
          </div>
          <figcaption>Candidate Screening. Streamline your workflow and scale.</figcaption>
        </figure>
        <figure>
          <div>
            <SVGIcon name='staff_augmentation/growing_business' />
          </div>
          <figcaption>Focus on Growing the Business. Streamline your workflow and scale.</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default WhyStaffAugmentation
