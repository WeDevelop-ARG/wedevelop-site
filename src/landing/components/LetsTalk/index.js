import classnames from 'classnames'
import { Formik, Form, Field } from 'formik'
import { useLocation } from 'react-router-dom'

import SVGIcon from 'main_app/components/SVGIcon'
import Select from './Select'
import Textarea from './Textarea'
import SetFormikValue from './SetFormikValue'

import classes from './styles.module.scss'

function LetsTalk () {
  const location = useLocation()
  const lookingToValue = location.state?.letsTalkForm?.lookingTo

  return (
    <section>
      <h2 id='lets_talk' className={classes.title}>
        Let’s talk
        <SVGIcon name='landing/hexagon_outline' className={classes.icon} />
      </h2>
      <Formik
        initialValues={{
          i_am: 'startup',
          looking_to: lookingToValue ?? 'validate_idea',
          name: '',
          email: '',
          message: ''
        }}
      >
        <Form className={classes.form}>
          <label className={classes.label}>
            I am{' '}
            <Field
              as={Select}
              name='i_am'
              className={classes.selectStyles}
            >
              <option value='startup'>a Startup</option>
              <option value='company'>a Company</option>
              <option value='individual'>an Individual</option>
            </Field>
          </label>
          <SetFormikValue ignoreOnMount name='looking_to' value={lookingToValue} />
          <label className={classes.label}>
            looking to{' '}
            <Field
              as={Select}
              name='looking_to'
              className={classes.selectStyles}
            >
              <option value='validate_idea'>validate an idea</option>
              <option value='create_product'>design / create a product</option>
              <option value='partner_up'>partner up with a dev team</option>
              <option value='change_product'>scale / change a product</option>
              <option value='talk_to_representative'>talk to a representative</option>
            </Field>
          </label>
          <Field type='text' name='name' placeholder='Name' className={classes.formStyles} />
          <Field type='email' name='email' placeholder='Email' className={classes.formStyles} />
          <Field
            as={Textarea}
            name='message'
            placeholder='Your message'
            maxLength='120'
            className={classnames(classes.formStyles, classes.textarea)}
          />
          <button type='submit' className={classes.buttonStyles}>Send Message</button>
        </Form>
      </Formik>
    </section>
  )
}

export default LetsTalk
