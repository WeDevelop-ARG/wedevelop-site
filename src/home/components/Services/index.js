import InternalLink from 'main_app/components/InternalLink'

import Button from 'main_app/components/Button'
import Skills from '../Skills'
import Service from '../Service'
import useServicesOffered from '../../hooks/useServicesOffered'

import pattern from 'assets/home/services/pattern.svg'
import Arrow from 'assets/home/services/arrow.svg'
import HalfCircle from 'assets/home/services/half_circle.svg'

import classes from './styles.module.scss'
import WrappedImage from 'main_app/components/WrappedImage'

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
              <InternalLink href={path} className={classes.serviceBox} key={id}>
                <li>
                  <Service
                    photo={photo}
                    title={title}
                  />
                  <hr className={classes.divider} />
                  <Service
                    description={description}
                  />
                  <p className={classes.link}>
                    Learn More <WrappedImage src={Arrow} layout='fixed' className={classes.arrow} />
                  </p>
                </li>
              </InternalLink>
            ))}
          </ul>
          <Skills />
          <div className={classes.contentText}>
            <p className={classes.descriptionText}>
              And other tailor-made solutions!
            </p>
            <div className={classes.talk}>
              <Button
                as={InternalLink}
                href='/contact'
                link={{ scroll: false }}
                isAnchor
                variant='primary'
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <WrappedImage src={pattern} alt='' className={classes.patternRight} />
          <WrappedImage src={pattern} alt='' className={classes.patternLeft} />
          <WrappedImage src={HalfCircle} alt='' layout='fixed' className={classes.halfCircle} />
          <div className={classes.smallHalfCircle} />
          <div className={classes.filledCircle} />
          <div className={classes.emptyCircle} />
          <div className={classes.smallCircle} />
        </div>
      </section>
    </>
  )
}

export default ServicesOffered
