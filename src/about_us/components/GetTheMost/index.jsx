import { useState } from 'react'
import classNames from 'classnames'

import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'

import arrow from 'assets/about_us/nearshore_outsourcing/right_arrow.svg'

import classes from './styles.module.scss'

export default function GetTheMost () {
  const [seeMoreButtonClicked, setSeeMoreButtonClicked] = useState(false)

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <h2 className={classes.title}>Get The Most Out Of Your Software Development Projects</h2>
        <hr className={classes.horizontalBar} />
        <div className={classes.textContainer}>
          <p className={classes.normalText}>
            We help your company deliver value to your
            customers and
            <span className={classes.boldText}>
              &nbsp;provide a healthier work environment
              for your team, adopting more efficient methodologies.&nbsp;
            </span>
            The Agile methodology and the Lean principles enable
            us to work with companies with different working
            practices boosting the effectiveness of nearshore
            software development.
          </p>
          <br />
          <p className={classes.normalText}>
            We know outsourcing can be challenging, but
            <span className={classes.boldText}>
              &nbsp;Agile is the key to improving communication with
              cross-functional teams&nbsp;
            </span>
            helping companies avoid project waste.
          </p>
          {seeMoreButtonClicked && (
            <>
              <br />
              <p className={classes.normalText}>
                On the other hand, Lean principles are the perfect
                tool to empower teams, delivering high-value
                results faster and optimizing the whole development
                process.
                <span className={classes.boldText}>
                  &nbsp;You will get a competitive advantage in the
                  market by onboarding a nearshore team aligned with
                  your business goals and work dynamics.&nbsp;
                </span>
              </p>
            </>
          )}
        </div>
        <Button variant='link' onClick={() => setSeeMoreButtonClicked(!seeMoreButtonClicked)}>
          <div className={classes.seeMoreButton}>
            <p className={classes.text}>See {seeMoreButtonClicked ? 'Less' : 'More'}</p>
            <Image
              src={arrow}
              alt='arrow'
              className={classNames(classes.arrow, {
                [classes.open]: seeMoreButtonClicked
              })}
            />
          </div>
        </Button>
      </div>
      <div className={classes.background}  />
    </section>
  )
}
