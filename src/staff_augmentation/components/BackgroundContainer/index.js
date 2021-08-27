import classes from './styles.module.scss'

function BackgroundContainer ({ backgroundURL }) {
  return (
    <div className={classes.backgroundContainer}>
      <img src={backgroundURL} alt='' className={classes.background} />
    </div>
  )
}

export default BackgroundContainer
