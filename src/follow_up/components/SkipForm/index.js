import classnames from 'classnames'
import { Field } from 'formik'

import SubmitButton from 'main_app/components/SubmitButton'
import Textarea from 'main_app/components/Textarea'
import useFieldWithErrorClassName from 'utils/use_field_with_error_class_name'

import FormLogic from './FormLogic'

import classes from './styles.module.scss'

function SkipForm ({
  clientName,
  onSubmitFinished,
  noAutofocus
}) {
  const TextAreaWithError = useFieldWithErrorClassName(
    Textarea,
    classes.fieldWithError
  )
  const initialValues = {
    comment: ''
  }
  return (
    <>
      <div className={classes.formHeader}>
        <h2 className={classes.titleText}>Thanks {clientName} for your time!</h2>
        <p className={classes.descriptionText}>You'll be connected to our founders soon</p>
        <hr className={classes.horizontalBar} />
      </div>
      <FormLogic
        initialValues={initialValues}
        onSubmitFinished={onSubmitFinished}
        className={classes.form}
      >
        <label className={classes.fieldLabel}>Any other info? Leave us a comment</label>
        <Field
          as={TextAreaWithError}
          name='comment'
          placeholder='Leave us a comment'
          maxLength='200'
          className={classnames(classes.inputStyles, classes.textarea)}
          autoFocus={noAutofocus !== true}
        />
        <div className={classes.buttonContainer}>
          <SubmitButton
            variant='primary'
            className={classes.buttonStyles}
          >
            Done!
          </SubmitButton>
        </div>
      </FormLogic>
    </>
  )
}

export default SkipForm
