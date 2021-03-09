import SVGIcon from 'main_app/components/SVGIcon'
import classes from './styles.module.scss'

function WhatAreYouLookingFor () {
  return (
    <section className={classes.container}>
      <h2>What are you looking for?</h2>
      <p>
        We are a Digital Product Development company born in Argentina focused on high-quality and long-term solutions.
      </p>
      <ul className={classes.listContainer}>
        <li>
          <button type='button' className={classes.cardButton}>
            Validate an idea
            <SVGIcon name='offerings/validate' className={classes.cardIcon} />
          </button>
        </li>
        <li>
          <button type='button' className={classes.cardButton}>
            Design / create a product
            <SVGIcon name='offerings/design' className={classes.cardIcon} />
          </button>
        </li>
        <li>
          <button type='button' className={classes.cardButton}>
            Partner up with a dev team
            <SVGIcon name='offerings/dev_team' className={classes.cardIcon} />
          </button>
        </li>
        <li>
          <button type='button' className={classes.cardButton}>
            Scale / change a product
            <SVGIcon name='offerings/scale' className={classes.cardIcon} />
          </button>
        </li>
        <li>
          <button type='button' className={classes.cardButton}>
            Show me all your offerings
            <SVGIcon name='offerings/all' className={classes.cardIcon} />
          </button>
        </li>
      </ul>
      <div className={classes.hexagonContainer}>
        <SVGIcon name='landing/filled_hexagon' className={classes.hexagon} />
      </div>
    </section>
  )
}

export default WhatAreYouLookingFor
