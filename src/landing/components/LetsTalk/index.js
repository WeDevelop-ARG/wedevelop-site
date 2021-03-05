import SVGIcon from 'main_app/components/SVGIcon'
import classes from './styles.module.scss'

function LetsTalk () {
  return (
    <section>
      <h2 className={classes.title}>
        Let’s talk
        <SVGIcon name='landing/hexagon_outline' className={classes.icon} />
      </h2>
      <form>
        <label className={classes.label}>
          I am
          <select name='i_am' className={classes.selectStyles}>
            <option>a Startup</option>
            <option>a Company</option>
            <option>an Individual</option>
          </select>
        </label>
        <label className={classes.label}>
          looking to
          <select name='looking_to' className={classes.selectStyles}>
            <option>validate an idea</option>
            <option>design / validate an idea</option>
            <option>partner up with a dev team</option>
            <option>scale / change a product</option>
            <option>talk to a representative</option>
          </select>
        </label>
        <input type='text' name='name' placeholder='Name' className={classes.formStyles} />
        <input type='email' name='email' placeholder='Email' className={classes.formStyles} />
        <textarea name='message' placeholder='Your message' maxLength='120' className={classes.formStyles} />
        <div aria-label='0 characters out of 120'>0 / 120</div>
        <button type='submit' className={classes.buttonStyles}>Send Message</button>
      </form>
    </section>
  )
}

export default LetsTalk
