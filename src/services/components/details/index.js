import classes from './details.module.scss'
function Details ({ subTitle, children }) {
  return (
    <div className={classes.container}>
      <div className={classes.centeredContainer}>
        <div className={classes.sectionHeader}>
          <p className={classes.keyFeatured}>Key Feature</p>
          <h2 className={classes.titleText}>Service Details</h2>
          <p className={classes.subtitleText}>{subTitle}</p>
          <hr className={classes.horizontalBar} />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Details
