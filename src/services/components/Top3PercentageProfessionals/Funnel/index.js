import classes from './styles.module.scss'

export default function Funnel () {
  return (
    <div className={classes.container}>
      <figure className={classes.level1}>
        <div className={classes.percentage}>
          <h4>32.4%</h4>
          <p>of applicants pass</p>
        </div>
        <div className={classes.content}>
          <h5>Discovery Call</h5>
          <p>
            To understand your specific needs, we will assign your business to our
            Customer Success Manager that will follow your case closely to make sure
            we met your expectations. During this stage we will review the profiles
            needed and sign an NDA.
          </p>
        </div>
      </figure>
      <hr className={classes.separator} />
      <figure className={classes.level2}>
        <div className={classes.percentage}>
          <h4>19.7%</h4>
          <p>of applicants pass</p>
        </div>
        <div className={classes.content}>
          <h5>Talent Acquisition</h5>
          <p>
            Once the search criteria are met, our Talent Acquisition and Technical
            recruiters will start defining the best candidates for your business
            and present them ASAP. WeDevelop’s talent pool is constantly growing.
          </p>
        </div>
      </figure>
      <hr className={classes.separator} />
      <figure className={classes.level3}>
        <div className={classes.percentage}>
          <h4>8.7%</h4>
          <p>of applicants pass</p>
        </div>
        <div className={classes.content}>
          <h5>Candidates Presentation</h5>
          <p>
            Our Customer Success Manager will present you a list of candidates to
            evaluate on...You only have to review them and choose your favourite
            and let us know. We take care of the rest!
          </p>
        </div>
      </figure>
      <hr className={classes.separator} />
      <figure className={classes.level4}>
        <div className={classes.level4Content}>
          <div className={classes.percentage}>
            <h4>3%</h4>
            <p>of applicants pass</p>
          </div>
          <div className={classes.content}>
            <h5>Interview Process: Hard & Soft Skills, English Level & Cultural Fit</h5>
            <p>
              Once candidates are vetted, our team will set the scheduled interviews.
              Once the final decision is made, we will handle the contract signing,
              and you will be ready to go. The contract will be customized to your
              needs and reviewed together beforehand.
            </p>
          </div>
        </div>
      </figure>
    </div>
  )
}
