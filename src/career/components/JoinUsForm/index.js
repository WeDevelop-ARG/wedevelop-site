import { useState, useCallback } from 'react'
import classnames from 'classnames'
import { Field, ErrorMessage } from 'formik'
import { InputGroup } from 'react-bootstrap'
import { isNil } from 'lodash'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import SVGIcon from 'main_app/components/SVGIcon'
import FileInput from './FileInput'
import ReCAPTCHAField from 'main_app/components/ReCAPTCHAField'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import FormLogic from './FormLogic'
import FormikSelect from './FormikSelect/index'
import CountrySelect from './CountrySelect/index'
import DotsPattern from 'assets/about_us/dots_pattern.svg'

import classes from './styles.module.scss'

const skillOptions = [{
  value: 'ANGULAR',
  label: 'Angular'
}, {
  value: 'MONGODB',
  label: 'MongoDB'
}, {
  value: 'NODEJS',
  label: 'NodeJS'
}, {
  value: 'PYTHON',
  label: 'Python'
}, {
  value: 'REACT_NATIVE',
  label: 'React Native'
}, {
  value: 'REACT',
  label: 'React'
},
{
  value: 'JAVA',
  label: 'Java'
}, {
  value: 'JAVASCRIPT',
  label: 'JavaScript'
}, {
  value: 'TYPESCRIPT',
  label: 'TypeScript'
}, {
  value: 'VUEJS',
  label: 'Vue.js'
}, {
  value: 'GOLANG',
  label: 'Golang'
}, {
  value: 'PHP',
  label: 'PHP'
}, {
  value: 'RUBY_ON_RAILS',
  label: 'Ruby on Rails'
}, {
  value: 'POSTGRESQL',
  label: 'PostgreSQL'
}, {
  value: 'MYSQL',
  label: 'MySQL'
}, {
  value: 'REDIS',
  label: 'Redis'
}, {
  value: 'MARIADB',
  label: 'María DB'
}, {
  value: 'AWS',
  label: 'AWS'
}, {
  value: 'GCP',
  label: 'GCP'
}, {
  value: 'AZURE',
  label: 'Azure'
}, {
  value: 'NET',
  label: '.NET'
}, {
  value: 'C#',
  label: 'C#'
}, {
  value: 'C++',
  label: 'C++'
}, {
  value: 'EXPRESSJS',
  label: 'Express.js'
}, {
  value: 'IOS',
  label: 'iOS'
}, {
  value: 'SWIFT',
  label: 'Swift'
}, {
  value: 'ANDROID',
  label: 'Android'
}, {
  value: 'KOTLIN',
  label: 'Kotlin'
}, {
  value: 'FLUTTER',
  label: 'Flutter'
}, {
  value: 'BOOTSTRAP',
  label: 'Bootstrap'
}, {
  value: 'HTML',
  label: 'HTML'
}, {
  value: 'CSS',
  label: 'CSS'
}, {
  value: 'DOCKER',
  label: 'Docker'
}, {
  value: 'KUBERNETES',
  label: 'Kubernetes'
}, {
  value: 'GRAPHQL',
  label: 'GraphQl'
}, {
  value: 'DJANGO',
  label: 'Django'
}, {
  value: 'CODEIGNITER',
  label: 'CodeIgniter'
}, {
  value: 'FLASK',
  label: 'Flask'
}, {
  value: 'UI_UX',
  label: 'UI/UX'
}, {
  value: 'TRELLO',
  label: 'Trello'
}, {
  value: 'GIT',
  label: 'Git'
}, {
  value: 'ORACLE',
  label: 'Oracle'
}, {
  value: 'SELENIUM',
  label: 'Selenium'
}, {
  value: 'CYPRESS',
  label: 'Cypress'
}, {
  value: 'JMETER',
  label: 'Jmeter'
}, {
  value: 'HEADHUNTING',
  label: 'Headhunting'
}, {
  value: 'IT_RECRUITMENT',
  label: 'IT Recruitment'
}, {
  value: 'TECH_RECRUITING',
  label: 'Technical Recruiting'
}, {
  value: 'STRATEGIC_PLANNING',
  label: 'Strategic Planning'
}, {
  value: 'TALENT_ACQUISITION',
  label: 'Talent Acquisition'
}, {
  value: 'SOURCING',
  label: 'Sourcing'
}, {
  value: 'JOB_POSTING',
  label: 'Job Posting'
}, {
  value: 'ATS_MANAGEMENT',
  label: 'ATS Management'
}, {
  value: 'CLIENT_ORIENTATION',
  label: 'Client Orientation'
}]

function JoinUsForm () {
  const TextAreaWithError = useFieldWithErrorClassName(
    Textarea,
    classes.fieldWithError
  )
  const InputWithError = useFieldWithErrorClassName(
    'input',
    classes.fieldWithError
  )
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState()
  const onSubmitFinished = useCallback((err) => {
    setIsSubmitted(true)
    setError(err)
  }, [])

  return (
    <section>
      <p className={classes.subheadingText}>Join Us</p>
      <h2 className={classes.titleText}>Let’s grow together</h2>
      <hr className={classes.horizontalBar} />
      <FormLogic
        onSubmitFinished={onSubmitFinished}
        className={classes.form}
      >
        <label className={classes.labels}>
          <span>*</span>{' '}First Name
          <Field
            as={InputWithError}
            type='text'
            name='firstName'
            className={classes.inputStyles}
          />
        </label>
        <label className={classes.labels}>
          <span>*</span>{' '}Last Name
          <Field
            as={InputWithError}
            type='text'
            name='lastName'
            className={classes.inputStyles}
          />
        </label>
        <label className={classes.labels}>
          <span>*</span>{' '}Email
          <Field
            as={InputWithError}
            type='email'
            name='email'
            className={classes.inputStyles}
          />
        </label>
        <label className={classes.labels}>
          <span>*</span>{' '}Skills
          <FormikSelect
            name='skills'
            options={skillOptions}
            placeholder='Select your skills'
          />
          <ErrorMessage name='skills' component='div' className={classes.errorMessage} />
        </label>
        <label className={classes.labels}>
          <span>*</span>{' '}Where are you from?
          <CountrySelect
            name='country'
            placeholder='Select your country'
          />
          <ErrorMessage name='country' component='div' className={classes.errorMessage} />
        </label>
        <label className={classes.labels}>
          Intended Remuneration (monthly)
          <InputGroup className={classes.remunerationGroup}>
            <InputGroup.Text className={classes.currency}>$</InputGroup.Text>
            <Field
              as={InputWithError}
              type='text'
              name='remuneration'
              placeholder='0.0'
              className={classes.remuneration}
            />
          </InputGroup>
        </label>
        <label className={classes.labels}>
          In one sentence, tell us what makes you unique
          <Field
            as={TextAreaWithError}
            name='message'
            maxLength='200'
            className={classnames(classes.inputStyles, classes.textarea)}
          />
        </label>
        <label className={classes.fileUploadField}>
          Resume/CV
          <Field
            name='resume'
            component={FileInput}
            aria-hidden='true'
          />
          <div className={classes.field}>
            <SVGIcon name='career/clip' className={classes.clip} />
            <Field name='resume'>
              {(props) => isNil(props.meta.value) ? 'Attach' : '1 file selected'}
            </Field>
          </div>
          <ErrorMessage name='resume' component='div' className={classes.errorMessage} />
        </label>
        <ReCAPTCHAField name='recaptchaToken' />
        {isSubmitted && error && (
          <p className={classes.submitError}>
            Oops! An error occurred and we couldn't receive your application. Please try again later.
          </p>
        )}
        {isSubmitted && !error && (
          <p className={classes.submitSuccessful}>
            Your application has been received successfully. We'll contact you soon.
          </p>
        )}
        <div className={classes.buttonContainer}>
          <SubmitButton
            variant='primary'
            className={classes.buttonStyles}
          >
            Join Us
          </SubmitButton>
        </div>
      </FormLogic>
      <div className={classes.filledCircle} aria-hidden='true' />
      <div className={classes.emptyCircle} aria-hidden='true' />
      <div className={classes.smallBlurCircle} aria-hidden='true' />
      <img src={DotsPattern} alt='' className={classes.topLeftDotsPattern} aria-hidden='true' />
      <div className={classes.halfCircle}>
        <SVGIcon name='home/services/half_circle' />
      </div>
      <div className={classes.leftSmallBlurCircle} />
      <div className={classes.leftFilledCircle} />
      <div className={classes.leftEmptyCircle} />
      <div className={classes.leftSmallCircle} />
    </section>
  )
}

export default JoinUsForm
