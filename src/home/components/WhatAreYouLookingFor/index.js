import { HashLink as Link } from 'react-router-hash-link'
import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function LetsTalkFormLink ({ lookingTo, ...props }) {
  return (
    <Link
      smooth
      to={{
        hash: 'lets_talk',
        state: { letsTalkForm: { lookingTo } }
      }}
      {...props}
    />
  )
}

function WhatAreYouLookingFor () {
  return (
    <section className={classes.container}>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>What are you looking for?</h2>
        <p className={classes.titleText}>
          We are a Digital Product Development company born in Argentina focused on high-quality and long-term solutions.
        </p>
      </div>
      <ul className={classes.listContainer}>
        <li>
          <LetsTalkFormLink lookingTo='validate_idea' className={classes.cardButton}>
            Validate an idea
            <SVGIcon name='offerings/validate' className={classes.cardIcon} />
          </LetsTalkFormLink>
        </li>
        <li>
          <LetsTalkFormLink lookingTo='create_product' className={classes.cardButton}>
            Design / create a product
            <SVGIcon name='offerings/design' className={classes.cardIcon} />
          </LetsTalkFormLink>
        </li>
        <li>
          <LetsTalkFormLink lookingTo='partner_up' className={classes.cardButton}>
            Partner up with a dev team
            <SVGIcon name='offerings/dev_team' className={classes.cardIcon} />
          </LetsTalkFormLink>
        </li>
        <li>
          <LetsTalkFormLink lookingTo='change_product' className={classes.cardButton}>
            Scale / change a product
            <SVGIcon name='offerings/scale' className={classes.cardIcon} />
          </LetsTalkFormLink>
        </li>
        <li>
          <LetsTalkFormLink lookingTo='talk_to_representative' className={classes.cardButton}>
            Show me all your offerings
            <SVGIcon name='offerings/all' className={classes.cardIcon} />
          </LetsTalkFormLink>
        </li>
      </ul>
      <div className={classes.hexagonContainer}>
        <SVGIcon name='home/filled_hexagon' className={classes.hexagon} />
      </div>
    </section>
  )
}

export default WhatAreYouLookingFor
