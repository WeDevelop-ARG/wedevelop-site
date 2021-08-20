import classes from './details.module.scss'
function Details({ subTitle, children }) {
  return (
    <div>
      <div>
        <p className={classes.keyFeatured}>Key featured </p>
        <h3 className={classes.titleText}>Service Details</h3>
        <p className={classes.subtitleText}>{subTitle}</p>
        <hr className={classes.horizontalBar} />
      </div>
      {children}
    </div>
  )
}

export default Details
