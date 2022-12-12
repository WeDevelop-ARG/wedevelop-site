import classes from './styles.module.scss'

export default function Funnel () {
  return (
    <div className={classes.container}>
      <figure className={classes.level1}>
        <div className={classes.content}>
          <h5>Screening</h5>
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
        <div className={classes.content}>
          <h5>Soft-skills interview</h5>
          <p>
            Apart from finding matching candidates in terms of certifications and techs,
            we will also check the soft skills of the different profiles.
          </p>
        </div>
      </figure>
      <hr className={classes.separator} />
      <figure className={classes.level3}>
        <div className={classes.content}>
          <h5>Technical Assessment</h5>
          <p>
            Our tech expert in the Talent Acquisition will be in charge of checking with
            a Live Technical Assessment the level of the candidate to make sure it fits your needs.
          </p>
        </div>
      </figure>
      <hr className={classes.separator} />
      <figure className={classes.level4}>
        <div className={classes.level4Content}>
          <div className={classes.content}>
            <h5>English Level & Cultural Fit</h5>
            <p>
              Of course the english level and the culture fit is a relevant part of the process.
              We make sure the english level is advanced and that the candidate is aligned and a
              good culture fit for your company.
            </p>
          </div>
        </div>
      </figure>
    </div>
  )
}
