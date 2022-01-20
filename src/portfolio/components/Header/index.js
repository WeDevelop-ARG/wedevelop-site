import Image from 'main_app/components/Image'

import DecoCircles from 'assets/portfolio/header_deco_circles.svg'
import DotsPattern from 'assets/portfolio/dots_pattern.svg'
import ProjectLogo from '../ProjectLogo'
import WorldIcon from 'assets/portfolio/world.svg'

import classes from './styles.module.scss'

function Header({
  backgroundURL,
  logoURL,
  heading,
  title,
  subtitle,
  tags,
  description,
  websiteURL,
  imageURL,
  logoBackground
}) {
  const logoStyleProp = {}
  if (logoBackground.startsWith('#')) {
    logoStyleProp.style = { backgroundColor: logoBackground }
  } else {
    logoStyleProp.style = { backgroundImage: logoBackground }
  }
  return (
    <section className={classes.headerContainer}>
      <div className={classes.decorationWrapper}>
        <Image
          src={backgroundURL}
          alt=''
          loading='eager'
          placeholderColor='#333'
          className={classes.headerBackground}
        />
        <div className={classes.logoContainer}>
          <ProjectLogo logoURL={logoURL} {...logoStyleProp} />
        </div>
      </div>
      <div className={classes.content}>
        <p className={classes.heading}>{heading}</p>
        <div className={classes.titleContainer}>
          <h2 className={classes.title}>{title}</h2>
          <a
            href={websiteURL}
            target='_blank'
            rel='noopener noreferrer'
            className={classes.websiteLink}
          >
            Website
            <Image src={WorldIcon} alt='' className={classes.worldIcon} />
          </a>
        </div>
        <hr className={classes.horizontalBar} />
        <h3 className={classes.subtitle}>{subtitle}</h3>
        <div className={classes.tagsContainer}>
          {tags.map((tag) => (
            <span key={tag} className={classes.tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={classes.description}>{description}</p>
      </div>
      <Image src={imageURL} alt='' className={classes.bottomImg} />
      <Image src={DecoCircles} alt='' className={classes.decoCircles} />
      <Image src={DotsPattern} alt='' className={classes.dotsPattern} />
    </section>
  )
}

export default Header
