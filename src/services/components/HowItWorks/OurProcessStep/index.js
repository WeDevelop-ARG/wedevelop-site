import classes from './styles.module.scss'

export default function OurProcessStep ({
  icon,
  heading,
  title,
  description
}) {
  return (
    <div className={classes.step}>
      <div className={classes.icon}>
        {icon}
      </div>
      <div className={classes.header}>
        <p className={classes.heading}>{heading}</p>
        <p className={classes.title}>{title}</p>
      </div>
      <div className={classes.description}>
        {description}
      </div>
    </div>
  )
}
