import ClutchWidget from 'main_app/components/ClutchWidget'
import { forwardRef } from 'react'
import classes from './styles.module.scss'

function Header (props, ref) {
  return (
    <section ref={ref} className={classes.headerContainer}>
      <h1 className={classes.title}>A human-centered company that gets things done <u>efficiently</u>.</h1>
      <blockquote className={classes.clutchReviews}>
        WeDevelop was resourceful, unafraid of problems and blockers, creative, professional, and fast.
      </blockquote>
      <ClutchWidget />
    </section>
  )
}

export default forwardRef(Header)
