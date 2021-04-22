import { HashLink } from 'react-router-hash-link'

import FreeQuote from './FreeQuote'

import classes from './styles.module.scss'

function GetFreeQuote () {
  return (
    <section id='get-free-quote' className={classes.getFreeQuoteSection}>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionHeader}>
          <h3 className={classes.titleText}>Get a free quote</h3>
          <p>(within an hour)</p>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.textContainer}>
            <p>
              Let us know <span>what you need</span> and we’ll
              circle back with <span>rates</span> and <span>some CVs of your interest.</span>
            </p>
            <p>
              Prefer to jump into a call?
              <br />
              <HashLink to='#contact' smooth>Schedule a call</HashLink>
            </p>
          </div>
          <FreeQuote className={classes.formContainer} />
        </div>
      </div>
    </section>
  )
}

export default GetFreeQuote
