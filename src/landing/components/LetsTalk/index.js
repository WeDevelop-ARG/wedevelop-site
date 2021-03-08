import classnames from 'classnames'

import SVGIcon from 'main_app/components/SVGIcon'
import Select from './Select'
import Textarea from './Textarea'

import classes from './styles.module.scss'

function LetsTalk () {
  return (
    <section>
      <h2 className={classes.title}>
        Let’s talk
        <SVGIcon name='landing/hexagon_outline' className={classes.icon} />
      </h2>
      <form className={classes.form}>
        <label className={classes.label}>
          I am{' '}
          <Select
            name='i_am'
            className={classes.selectStyles}
          >
            <option>a Startup</option>
            <option>a Company</option>
            <option>an Individual</option>
          </Select>
        </label>
        <label className={classes.label}>
          looking to{' '}
          <Select
            name='looking_to'
            className={classes.selectStyles}
          >
            <option>validate an idea</option>
            <option>design / validate an idea</option>
            <option>partner up with a dev team</option>
            <option>scale / change a product</option>
            <option>talk to a representative</option>
          </Select>
        </label>
        <input type='text' name='name' placeholder='Name' className={classes.formStyles} />
        <input type='email' name='email' placeholder='Email' className={classes.formStyles} />
        <Textarea
          name='message'
          placeholder='Your message'
          maxLength='120'
          className={classnames(classes.formStyles, classes.textarea)}
        />
        <button type='submit' className={classes.buttonStyles}>Send Message</button>
      </form>
    </section>
  )
}

export default LetsTalk
