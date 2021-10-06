import classes from './styles.module.scss'

function Intro () {
  return (
    <div className={classes.messageContainer}>
      <p>
        Thanks <b>Jhon</b> for your interest in WeDevelopl!
      </p>
      <p>
        Before we get started, we’d like to ask a few questions to better understand your business needs.
      </p>
    </div>
  )
}

export default Intro
