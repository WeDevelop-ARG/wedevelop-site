import classes from './styles.module.scss'

function BrandGradient ({ children }) {
  return (
    <span className={classes.gradientText}>{children}</span>
  )
}

export default BrandGradient
