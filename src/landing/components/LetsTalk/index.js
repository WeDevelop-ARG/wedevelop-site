import SVGIcon from 'main_app/components/SVGIcon'
import classes from './styles.module.scss'

function LetsTalk () {
  return (
    <section>
      <div>
        <SVGIcon name='landing/hexagon_outline' />
        <h2>Let’s talk</h2>
      </div>
      <form>
        <label>
          I am
          <select name='i_am' className={classes.selectStyles}>
            <option>a Startup</option>
          </select>
        </label>
        <label>
          looking to
          <select name='looking_to' className={classes.selectStyles}>
            <option>validate an idea</option>
          </select>
        </label>
        <input type='text' name='name' placeholder='Name' className={classes.formStyles}/>
        <input type='email' name='email' placeholder='Email' className={classes.formStyles}/>
        <textarea name='message' placeholder='Your message' maxLength='120' className={classes.formStyles}/>
        <div aria-label='0 characters out of 120'>0 / 120</div>
        <button type='submit' className={classes.buttonStyles}>Send Message</button>
      </form>
    </section>
  )
}

export default LetsTalk
