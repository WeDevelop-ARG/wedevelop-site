import classes from '../benefits.module.scss'

function Benefit ({ className, image, text }) {
  return (
    <div className={className}>
      <img className={classes.iconCircle} src={image} alt='' />
      <p className={classes.descriptionText}>{text}</p>
    </div>
  )
}

export default Benefit
