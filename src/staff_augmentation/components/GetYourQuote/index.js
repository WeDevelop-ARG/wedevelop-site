import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function GetYourQuote () {
  return (
    <section className={classes.getYourQuoteSection}>
      <div>
        <p className={classes.subheadingText}>Get a your quote now</p>
        <h2>Ready to grow</h2>
        <h2>your IT Staff?</h2>
      </div>
      <div>
        <Button className={classes.getYourQuoteButton}>Get a your quote now</Button>
      </div>
    </section>
  )
}

export default GetYourQuote
