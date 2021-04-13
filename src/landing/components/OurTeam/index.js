import Button from 'main_app/components/Button'
import SVGIcon from 'main_app/components/SVGIcon'
import classes from './styles.module.scss'

function OurTeam () {
  return (
    <section id='our_team' className={classes.teamContainer}>
      <div className={classes.flexItems}>
        <h2 className={classes.mainTitle}>Our Team</h2>
        <p>
          We are friendly group of people with professionalism and good vibes.
        </p>
        <p>
          We want everyone to feel that <b>working with us is like working with friends.</b>
        </p>
      </div>
      <div className={classes.rigthContainer}>
        <h3 className={classes.titleStyles}>#PeopleFirst</h3>
        <p>
          We’re a people-first company.
          <br />
          Respect and friendship goes beyond anything else.
        </p>
        <p>
          <b>Want to join us?</b> Email us your resume:
          {' '}
          <a href='mailto:jobs@wedevelop.me'>jobs@wedevelop.me</a>
        </p>
      </div>
      <Button
        as='a'
        variant='primary'
        iconLeft={
          <SVGIcon name='landing/download' className={classes.iconDowload} />
        }
        href='/storage/WeDevelop-Brochure.pdf?alt=media'
        target='_blank'
        rel='noreferrer noopener'
        className={classes.buttonDowload}
      >
        Download our Service Brochure
      </Button>
    </section>
  )
}

export default OurTeam
