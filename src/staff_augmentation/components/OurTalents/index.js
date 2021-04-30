import SVGIcon from 'main_app/components/SVGIcon'

function OurTalents () {
  return (
    <section>
      <div>
        <p>Our talents</p>
        <h2>Expertly Matched Talent</h2>
        <p>We’ll present you candidates in no time. You’ll see.</p>
      </div>
      <div>
        <div>
          <SVGIcon name="staff_augmentation/developers_icon" />
          <p>Developers</p>
          <p>
            Deliver high quality engineering solutions: 
            <span>engineers, programmers, coders, architects, and more.</span>
          </p>
        </div>
        <div>
          <SVGIcon name="staff_augmentation/designers_icon" />
          <p>Designers</p>
          <p>
            Curate an seamless end-to-end design experience 
            for your audience with our <span>UI, UX, Visual, and 
            Interaction design experts.</span>
          </p>
        </div>
        <div>
          <SVGIcon name="staff_augmentation/leaders_icon" />
          <p>Team Leaders</p>
          <p>
            Execute critical projects with experienced 
            <span>team leaders and  lead your way to success.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurTalents
