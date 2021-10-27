import { HashLink } from 'react-router-hash-link'
import classNames from 'classnames'
import Image from 'main_app/components/Image'

import { ReactComponent as World } from 'assets/portfolio/world.svg'
import Arrow from 'assets/portfolio/arrow.svg'

import classes from './styles.module.scss'

function PortfolioProjectCard ({
  coverImageURL,
  logoURL,
  logoBackgroundColor,
  externalWebsiteURL,
  projectName,
  shortDescription,
  tags,
  description,
  detailsPagePath,
  className
}) {
  const logoStyleProp = {}
  if (logoBackgroundColor.startsWith('#')) {
    logoStyleProp.style = { backgroundColor: logoBackgroundColor }
  } else {
    logoStyleProp.style = { backgroundImage: logoBackgroundColor }
  }

  return (
    <div
      className={classNames(classes.container, className)}
    >
      <Image
        src={coverImageURL}
        alt={shortDescription}
        objectFit='cover'
        position='bottom'
        placeholderColor='#FFF'
        className={classes.headerImage}
      />
      <Image
        src={logoURL}
        alt={projectName}
        objectFit='contain'
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
              <World role='presentation' />
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
