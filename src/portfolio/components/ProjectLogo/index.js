import classnames from 'classnames'

import WrappedImage from 'main_app/components/WrappedImage'

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
      <WrappedImage
        src={logoURL}
        alt={projectName}
        objectFit='contain'
        className={classes.logoImg}
      />
    </figure>
  )
}

export default ProjectLogo
