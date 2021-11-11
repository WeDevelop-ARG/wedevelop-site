import { HashLink } from 'react-router-hash-link'
import Image from 'main_app/components/Image'

import { ReactComponent as World } from 'assets/portfolio/world.svg'
import Arrow from 'assets/portfolio/arrow.svg'
import ProjectLogo from '../ProjectLogo'

import classes from './styles.module.scss'

function PortfolioProjectCard ({
  coverImageURL,
  logoURL,
  logoBackground,
  externalWebsiteURL,
  projectName,
  shortDescription,
  tags,
  description,
  detailsPagePath
}) {
  const logoStyleProp = {}
  if (logoBackground.startsWith('#')) {
    logoStyleProp.style = { backgroundColor: logoBackground }
  } else {
    logoStyleProp.style = { backgroundImage: logoBackground }
  }

  return (
    <div
      className={classes.container}
    >
      <Image
        src={coverImageURL}
        alt={shortDescription}
        objectFit='cover'
        position='bottom'
        placeholderColor='#FFF'
        className={classes.headerImage}
      />
      <ProjectLogo
        logoURL={logoURL}
        projectName={projectName}
        className={classes.logo}
        {...logoStyleProp}
      />
      <div className={classes.projectDetails}>
        <div
          className={classes.header}
        >
          <h3 className={classes.projectName}>{projectName}</h3>
          {externalWebsiteURL && (
            <a
              href={externalWebsiteURL}
              target='_blank' rel='noopener noreferrer'
            >
              <World role='presentation' className={classes.world} />
            </a>
          )}
        </div>
        <p className={classes.shortDescription}>{shortDescription}</p>
        <div className={classes.tagsContainer}>
          {tags.map(tag => (
            <span className={classes.tag} key={tag}>{tag}</span>
          ))}
        </div>
        <p className={classes.description}>
          {description}
        </p>
        <HashLink smooth to={detailsPagePath} className={classes.knowMore}>
          Know More
          <Image src={Arrow} alt='' className={classes.arrow} />
        </HashLink>
      </div>
    </div>
  )
}

export default PortfolioProjectCard
