import { HashLink } from 'react-router-hash-link'

import SVGIcon from 'main_app/components/SVGIcon'
import Button from 'main_app/components/Button'
import Skills from '../Skills'
import Service from '../Service'
import useServicesOffered from '../../hooks/useServicesOffered'
import pattern from 'assets/home/services/pattern.svg'

import classes from './styles.module.scss'

function ServicesOffered () {
  const services = useServicesOffered()

  return (
    <>
      <section id='services' className={classes.getInTouch}>
        <div className={classes.sectionContent}>
          <p className={classes.subheadingText}>services</p>
          <h2 className={classes.titleText}>What we’re good at</h2>
          <p className={classes.descriptionText}>
            We are an agile and unstoppable team committed to your vision and goals
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
                  <p className={classes.link}>Learn More <SVGIcon name='home/services/arrow' className={classes.arrow} /></p>
                </HashLink>
              </li>
            ))}
          </ul>
          <Skills />
          <div className={classes.contentText}>
            <p className={classes.descriptionText}>
              ...and other tailor made solutions!
            </p>
            <div className={classes.talk}>
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
          </div>
          <img src={pattern} alt='' className={classes.patternRight} />
          <img src={pattern} alt='' className={classes.patternLeft} />
          <div className={classes.halfCircle}>
            <SVGIcon name='home/services/half_circle' />
          </div>
          <div className={classes.filledCircle} />
          <div className={classes.emptyCircle} />
          <div className={classes.smallCircle} />
        </div>
      </section>
    </>
  )
}

export default ServicesOffered
