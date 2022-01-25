import classnames from 'classnames'

import Image from 'main_app/components/Image'

import classes from './styles.module.scss'

function ProjectLogo ({
  logoURL,
  projectName = '',
  className,
  ...props
}) {
  return (
    <figure
      className={classnames(classes.logoBackground, className)}
      {...props}
    >
      <Image
        src={logoURL}
        alt={projectName}
        objectFit='contain'
        className={classes.logoImg}
      />
    </figure>
  )
}

export default ProjectLogo
