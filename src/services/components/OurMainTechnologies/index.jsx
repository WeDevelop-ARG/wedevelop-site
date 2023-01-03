import Image from 'main_app/components/Image'

import useMainTechnologies from '../../hooks/useMainTechnologies'

import WrappedImage from 'main_app/components/WrappedImage'
import TechnologyTooltip from '../TechnologyTooltip'

import dotsPattern from 'assets/services/dots-pattern.svg'
import decoElements from 'assets/services/our_technologies/deco-elements.svg'
import dottedSemiCircle from 'assets/services/our_technologies/dotted-semi-circle.svg'

import classes from './styles.module.scss'

export default function OurMainTechnologies () {
  const { technologies } = useMainTechnologies()

  return (
    <section className={classes.section}>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>Our Technologies</h2>
        <p className={classes.subtitle}>
          At WeDevelop, we aim to be ahead of the game.
          We work with tech profiles that master the
          avant-garde technologies that currently shape
          and enhance the digital acceleration process
        </p>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.logoWall}>
        {technologies.map((technology, i) => (
          <TechnologyTooltip
            key={i}
            image={technology.image}
            title={technology.name}
            description={technology.description}
          >
            <div className={classes.technologyContainer}>
              <div className={classes.imageContainer}>
                <Image src={technology.image.src} alt={technology.image.alt} layout='fixed' width='200px' height='150px' />
              </div>
              <h2 className={classes.technologyName}>{technology.name}</h2>
            </div>
          </TechnologyTooltip>
        ))}
      </div>
      <WrappedImage className={classes.decoElements} src={decoElements} alt='' />
      <WrappedImage className={classes.dottedSemiCircle} src={dottedSemiCircle} alt='' />
      <WrappedImage className={classes.dotsPattern} src={dotsPattern} alt='' />
    </section>
  )
}
