import classes from './details.module.scss'
function Details({ subTitle, children }) {
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.keyFeatured}>Key featured </p>
        <h2 className={classes.titleText}>Service Details</h2>
        <p className={classes.subtitleText}>{subTitle}</p>
        <hr className={classes.horizontalBar} />
      </div>
      {children}

    </div>
  )
}

export default Details
