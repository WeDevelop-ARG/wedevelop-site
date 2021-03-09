import SVGIcon from 'main_app/components/SVGIcon'
import classes from './styles.module.scss'

function OurTeam () {
  return (
    <section className={classes.teamContainer}>
      <SVGIcon name='logo' variant='rocket' className={classes.rocket} />
      <h2>Our Team</h2>
      <p>
        We are friendly group of people with professionalism and good vibes.
      </p>
      <p>
        We want everyone to feel that <b>working with us is like working with friends.</b>
      </p>
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
      <a href='#WIP' className={classes.buttonDowload}>
        <SVGIcon name='landing/download' className={classes.iconDowload}/>
        Download our Service Brochure
      </a>
    </section>
  )
}

export default OurTeam
