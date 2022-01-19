import Link from 'next/link'

import SVGIcon from 'main_app/components/SVGIcon'
import Button from 'main_app/components/Button'
import Skills from '../Skills'
import Service from '../Service'
import useServicesOffered from '../../hooks/useServicesOffered'
import pattern from 'assets/home/services/pattern.svg'

import classes from './styles.module.scss'
import Image from 'next/image'

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
              <Link href={path} smooth className={classes.serviceBox} key={id}>
                <li>
                  <Service
                    photo={photo}
                    title={title}
                  />
                  <hr className={classes.divider} />
                  <Service
                    description={description}
                  />
                  <p className={classes.link}>Learn More <SVGIcon name='home/services/arrow' className={classes.arrow} /></p>
                </li>
              </Link>
            ))}
          </ul>
          <Skills />
          <div className={classes.contentText}>
            <p className={classes.descriptionText}>
              ...and other tailor made solutions!
            </p>
            <div className={classes.talk}>
              <Button
                as={Link}
                href='/contact'
                smooth
                isAnchor
                variant='primary'
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <Image src={pattern} alt='' className={classes.patternRight} />
          <Image src={pattern} alt='' className={classes.patternLeft} />
          <div className={classes.halfCircle}>
            <SVGIcon name='home/services/half_circle' />
          </div>
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
