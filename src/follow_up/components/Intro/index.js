import classes from './styles.module.scss'

function Intro ({ clientName }) {
  return (
    <div className={classes.messageContainer}>
      <p>
        Thanks <b>{clientName}</b> for your interest in WeDevelop!
      </p>
      <p>
        Before we get started, we’d like to ask a few questions to better understand your business needs.
      </p>
    </div>
  )
}

export default Intro
