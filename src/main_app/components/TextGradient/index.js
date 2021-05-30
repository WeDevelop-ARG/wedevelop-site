import classes from './styles.module.scss'

const TextGradient = ({ title }) => {
  return (
    <h2 className={classes.gradientText}>{title}</h2>
  )
}

export default TextGradient
