import Image from 'main_app/components/Image'

import classes from './styles.module.scss'

function Header ({
  backgroundURL,
  logoURL,
  heading,
  title,
  subtitle,
  tags,
  description,
  websiteURL,
  imageURL
}) {
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
          <figure className={classes.logoBackground}>
            <Image
              src={logoURL}
              alt='LOGO'
              className={classes.logoImg}
            />
          </figure>
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
            <img src='' alt='' className={classes.worldIcon} />
          </a>
        </div>
        <hr className={classes.horizontalBar} />
        <h3 className={classes.subtitle}>{subtitle}</h3>
        <div className={classes.tagsContainer}>
          {tags.map((tag) => {
            return (
              <span
                key={tag}
                className={classes.tag}
              >
                {tag}
              </span>
            )
          })}
        </div>
        <p className={classes.description}>{description}</p>
      </div>
      <Image
        src={imageURL}
        alt=''
        className={classes.bottomImg}
      />
    </section>
  )
}

export default Header
