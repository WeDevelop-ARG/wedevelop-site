import classes from './styles.module.scss'

function Portfolio () {
  return (
    <>
      <section id='portfolio'>
        <div>
          <p className={classes.subheadingText}>success stories</p>
          <h2 className={classes.titleText}>Our Portfolio</h2>
          <hr className={classes.horizontalBar} />
        </div>
      </section>
    </>
  )
}

export default Portfolio
