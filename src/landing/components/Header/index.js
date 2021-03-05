import ClutchWidget from 'main_app/components/ClutchWidget'
import classes from './styles.module.scss'

function Header () {
  return (
    <section className={classes.headerContainer}>
      <h1>A human-centered company that gets things done <u>efficiently</u>.</h1>
      <blockquote>
        WeDevelop was resourceful, unafraid of problems and blockers, creative, professional, and fast.
      </blockquote>
      <ClutchWidget />
    </section>
  )
}

export default Header
