import { HashLink } from 'react-router-hash-link'
import Button from 'main_app/components/Button'

function Details({ title, subTitle, description, servicesList }) {
  return (
    <>
      <p>
        Key featured
      </p>
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <hr />
      <div>
        {description}
      </div>
      <Button
        as={HashLink}
        to='/contact'
        smooth
        isAnchor
        variant='primary'
      >
        Get in Touch
          </Button>
      <ul>
        {servicesList.map(service => (
          <li key={service.name}>{service.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Details
