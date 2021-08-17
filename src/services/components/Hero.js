import { HashLink } from 'react-router-hash-link'
import Button from 'main_app/components/Button'

function Hero({ icon, photo, background, title, description }) {
  return (
    <>
      <img className="" src={icon} alt='' />
      <img className="" src={photo} alt='' />
      <h3>{title}</h3>
      <p>
        {description}
      </p>
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
      <img className="" src={background} alt='' />
    </>
  )
}

export default Hero
