import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function GetYourQuote () {
  return (
    <section className={classes.getYourQuoteSection}>
      <div className={classes.container}>
        <div className={classes.leftColumn}>
          <h3 className={classes.subheadingText}>Get your quote now</h3>
          <h2>Ready to grow your IT Staff?</h2>
        </div>
        <div className={classes.rightColumn}>
          <Button
            as={HashLink}
            to='#top'
            smooth
            className={classes.getYourQuoteButton}
          >
            Get your quote now
          </Button>
          <div className={classes.subText}>We typically reply every email within an hour.</div>
        </div>
      </div>
    </section>
  )
}

export default GetYourQuote
