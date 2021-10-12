import { useState, useCallback } from 'react'
import isNil from 'lodash/isNil'
import classnames from 'classnames'
import { Field, ErrorMessage } from 'formik'
import InputGroup from 'react-bootstrap/InputGroup'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import SVGIcon from 'main_app/components/SVGIcon'
import Image from 'main_app/components/Image'
import FileInput from './FileInput'
import ReCAPTCHAField from 'main_app/components/ReCAPTCHAField'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'
import RadioButtonsCards from '../../../staff_augmentation/components/RadioButtonsCards'

import FormLogic from './FormLogic'
import FormikSelect from './FormikSelect/index'
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

const serviceType = [{
  key: '1',
  value: 'Staff Augmentation'
},
{
  key: '2',
  value: 'Autonomous Team'
},
{
  key: '3',
  value: 'Other'
}
]

const startingDate = [{
  key: '1',
  value: 'Inmmediately'
},
{
  key: '2',
  value: '2-4 weeks'
},
{
  key: '3',
  value: 'I don’t know'
}
]

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
    <section className={classes.joinUsSection}>
      <p className={classes.subheadingText}>Join Us</p>
      <h2 className={classes.titleText}>Let’s grow together</h2>
      <hr className={classes.horizontalBar} />
      <FormLogic
        onSubmitFinished={onSubmitFinished}
        className={classes.form}
      >
        <RadioButtonsCards
          label='Radio Topic'
          name='sericeOption'
          options={serviceType}
        />
        <div className={classes.buttonContainer}>
          <SubmitButton
            variant='primary'
            className={classes.buttonStyles}
          >
            Join Us
          </SubmitButton>
        </div>
      </FormLogic>
    </section>
  )
}

export default JoinUsForm
