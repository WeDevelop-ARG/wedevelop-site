import { HashLink } from 'react-router-hash-link'
import usegetYourQuote from '../../../hooks/useGetYourQuote'

import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function GetYourQuote () {
  const textsGetYourQuote = usegetYourQuote()
  return (
    <section className={classes.getYourQuoteSection}>
      {textsGetYourQuote.map((
        {
          index,
          subHeading,
          title,
          nameButton,
          subTextButton
        }) => (
          <div className={classes.container} key={index}>
            <div className={classes.leftColumn}>
              <h3 className={classes.subheadingText}>{subHeading}</h3>
              <h2>{title}</h2>
            </div>
            <div className={classes.rightColumn}>
              <Button
                as={HashLink}
                to='#top'
                smooth
                className={classes.getYourQuoteButton}
              >
                {nameButton}
              </Button>
              <div className={classes.subText}>{subTextButton}</div>
            </div>
          </div>
      ))}
    </section>
  )
}

export default GetYourQuote
