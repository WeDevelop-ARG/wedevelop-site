import classNames from 'classnames'

import Image from 'main_app/components/Image'

import classes from './styles.module.scss'

function Step ({ className, icon, title, description }) {
  return (
    <div className={classNames(classes.column, className)}>
      <Image src={icon} alt='' className={classes.icon} />
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default Step
