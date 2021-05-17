import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function GetYourQuote () {
  return (
    <section className={classes.getYourQuoteSection}>
      <li>
        <h3 className={classes.subheadingText}>Get a your quote now</h3>
        <h2>Ready to grow</h2>
        <h2>your IT Staff?</h2>
      </li>
      <li>
        <Button className={classes.getYourQuoteButton}>Get a your quote now</Button>
        <span className={classes.subText}>We typically reply every email within an hour.</span>
      </li>
    </section>
  )
}

export default GetYourQuote
