import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'
import Skills from '../Skills'
import Service from '../Service'
import useServicesOffered from '../../hooks/useServicesOffered'

import classes from './styles.module.scss'

function ServicesOffered () {
  const services = useServicesOffered()

  return (
<<<<<<< HEAD
    <>
      <section className={classes.getInTouch}>
        <div className={classes.sectionContent}>
          <p className={classes.subheadingText}>services</p>
          <h2 className={classes.titleText}>What we're good at</h2>
          <p className={classes.descriptionText}>
            We are an agile and unstoppable team commited to your vision and goals
          </p>
          <hr className={classes.horizontalBar} />
          <ul className={classes.serviceList}>
            {services.map(({
              id,
              title,
              description,
              photo,
              path
            }) => (
              <li className={classes.serviceBox} key={id}>
                <Service
                  photo={photo}
                  title={title}
                />
                <hr className={classes.divider} />
                <Service
                  description={description}
                />
                <HashLink to={path} smooth>
                  <p className={classes.link}>Learn More</p>
                </HashLink>
              </li>
            ))}
          </ul>
          <Skills />
          <p className={classes.descriptionText}>
            ...and other tailor made solutions!
          </p>
          <Button
            as={HashLink}
            to='/contact'
            smooth
            isAnchor
            variant='primary'
            className={classes.buttonTalk}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </>
=======
    <section id='services' className={classes.services}>
      <h2 className={classes.subHeading}>What we do</h2>
      <ul className={classes.serviceList}>
        {services.map(({
          id,
          name,
          description,
          photo
        }) => (
          <li className={classes.service} key={id}>
            <Service
              name={name}
              description={description}
              photo={photo}
            />
          </li>
        ))}
      </ul>
    </section>
>>>>>>> feature/redesign
  )
}

export default ServicesOffered
