import { HashLink } from 'react-router-hash-link'
import Button from 'main_app/components/Button'

function Schedule() {
  return (
    <div>
      <h3>Hire your new <span>Full-Stack Developer</span> now!</h3>
      <p>Vitae habitant blandit adipiscing porta. Nulla tortor, eu consectetur nunc. </p>
      <hr />
      <Button
        as={HashLink}
        to='/contact'
        smooth
        isAnchor
        variant='primary'
      >
        Get in Touch
          </Button>
    </div>
  )
}

export default Schedule
