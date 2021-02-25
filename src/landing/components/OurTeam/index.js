import Logo from 'main_app/components/Logo'
import Download from 'assets/landing/download.svg'

function OurTeam () {
  return (
    <section>
      <Logo rocketOnly />
      <h2>Our Team</h2>
      <p>
        We are friendly group of people with professionalism and good vibes.
      </p>
      <p>
        We want everyone to feel that <b>working with us is like working with friends.</b>
      </p>
      <h3>#PeopleFirst</h3>
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
      <a href='#WIP'>
        <img src={Download} alt='' />
        Download our Service Brochure
      </a>
    </section>
  )
}

export default OurTeam
