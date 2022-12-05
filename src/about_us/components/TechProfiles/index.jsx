import Button from 'main_app/components/Button'
import InternalLink from 'main_app/components/InternalLink'
import ProfilesContainer from './ProfilesContainer'
import classes from './styles.module.scss'

export default function TechProfiles () {
  return (
    <section className={classes.mainSection}>
      <div className={classes.textContainer}>
        <p className={classes.introTitle}>We strive to excellence</p>
        <div className={classes.mainContent}>
          <h2>Tech Profiles</h2>
          <span>
            <p className={classes.body}>
              Augment your in-house team and fill the skills gaps in
              your company by hiring nearshore
              <span className={classes.boldText}>
                &nbsp;top-notch software engineers, developers, analysts,
                QAs, and designers with broad expertise in cutting-edge technologies.
              </span>
              <br /><br />
              At WeDevelop, we source the best tech talent in Latin America
              through a
              <span className={classes.boldText}>
                &nbsp;rigorous screening process to guarantee their
                expertise&nbsp;
              </span>
              in the most in-demand software specializations and frameworks.
            </p>
          </span>
        </div>
        <hr className={classes.horizontalBar} />
        <Button
          as={InternalLink}
          href='/services/staff-augmentation'
          className={classes.hireNowButton}
        >
          Hire Now!
        </Button>
      </div>
      <ProfilesContainer
        containerClassName={classes.profilesContainer}
      />
    </section>
  )
}
