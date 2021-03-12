import classnames from 'classnames'
import { useLocation } from 'react-router-dom'
import { Field } from 'formik'

import SVGIcon from 'main_app/components/SVGIcon'
import SubmitButton from 'main_app/components/SubmitButton'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import Select from './Select'
import Textarea from './Textarea'
import SetFormikValue from './SetFormikValue'

import classes from './styles.module.scss'
import ContactForm from './ContactForm'

function LetsTalk () {
  const location = useLocation()
  const TextAreaWithError = useFieldWithErrorClassName(
    Textarea,
    classes.fieldWithError
  )
  const InputWithError = useFieldWithErrorClassName(
    'input',
    classes.fieldWithError
  )
  const lookingTo = location.state?.letsTalkForm?.lookingTo ?? 'validate_idea'

  return (
    <section className={classes.container}>
      <h2 id='lets_talk' className={classes.title}>
        Let’s talk
        <SVGIcon name='landing/hexagon_outline' className={classes.icon} />
      </h2>
      <ContactForm
        initialValues={{ lookingTo }}
        className={classes.form}
      >
        <label className={classes.label}>
          I am{' '}
          <Field
            as={Select}
            name='iAm'
            className={classes.selectStyles}
          >
            <option value='startup'>a Startup</option>
            <option value='company'>a Company</option>
            <option value='individual'>an Individual</option>
          </Field>
        </label>
        <SetFormikValue ignoreOnMount name='lookingTo' value={lookingTo} />
        <label className={classes.label}>
          looking to{' '}
          <Field
            as={Select}
            name='lookingTo'
            className={classes.selectStyles}
          >
            <option value='validate_idea'>validate an idea</option>
            <option value='create_product'>design / create a product</option>
            <option value='partner_up'>partner up with a dev team</option>
            <option value='change_product'>scale / change a product</option>
            <option value='talk_to_representative'>talk to a representative</option>
          </Field>
        </label>
        <div className={classes.inputsContainer}>
          <Field
            as={InputWithError}
            type='text'
            name='name'
            placeholder='Name'
            className={classes.inputStyles}
          />
          <Field
            as={InputWithError}
            type='email'
            name='email'
            placeholder='Email'
            className={classes.inputStyles}
          />
        </div>
        <Field
          as={TextAreaWithError}
          name='message'
          placeholder='Your message'
          maxLength='120'
          className={classnames(classes.inputStyles, classes.textarea)}
        />
        <SubmitButton
          variant='primary'
          className={classes.buttonStyles}
        >
          Send Message
        </SubmitButton>
      </ContactForm>
    </section>
  )
}

export default LetsTalk
