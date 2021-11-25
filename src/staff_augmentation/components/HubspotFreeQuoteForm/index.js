import { useEffect } from 'react'

import { displayFollowUpForm } from './display_follow_up_form'

function HubspotFreeQuoteForm ({ formOrigin, handleSubmitFinished }) {
  useEffect(() => {
    const hubspotForm = document.createElement('script')
    hubspotForm.src = 'https://js.hsforms.net/forms/shell.js'
    document.body.appendChild(hubspotForm)

    const jquery = document.createElement('script')
    jquery.src = 'https://code.jquery.com/jquery-3.6.0.min.js'
    document.body.appendChild(jquery)

    hubspotForm.addEventListener('load', () => {
      if (window.hbspt) {
        const values = {
          name: '',
          email: '',
          message: ''
        }
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '20780470',
          formId: 'b893964b-d302-470c-a17f-bf673457fade',
          target: '#hubspot-form',
          onFormSubmit: $form => {
            values.name = $form.find('input[name="firstname"]').val()
            values.email = $form.find('input[name="email"]').val()
            values.message = $form.find('textarea[name="message"]').val()
          },
          onFormSubmitted: () => {
            displayFollowUpForm(values, handleSubmitFinished, formOrigin)
          }
        })
      }
    })
  }, [handleSubmitFinished, formOrigin])

  return (
    <div id='hubspot-form' />
  )
}

export default HubspotFreeQuoteForm
