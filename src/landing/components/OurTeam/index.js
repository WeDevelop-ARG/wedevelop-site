import SVGIcon from 'main_app/components/SVGIcon'

function OurTeam () {
  return (
    <section>
      <SVGIcon name='logo' variant='rocket' />
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
        <SVGIcon name='landing/download' />
        Download our Service Brochure
      </a>
    </section>
  )
}

export default OurTeam
