const {
  addApplicantToMailchimp,
  addDetailsToMailchimpApplicant
} = require('../services/mailchimp')
const { addDataToFirestore } = require('../services/firestore')
const { isReCAPTCHATokenValid } = require('../services/recaptcha')
const { sendEmail } = require('../services/sendEmail')

const { MAILCHIMP_DEFAULT_LIST_ID, CONTACT_FORM_DESTINATION_EMAIL } = require('../constants')

module.exports = exports = async function handleRequest (req, res) {
  res.set('Access-Control-Allow-Origin', '*')
  try {
    switch (req.method) {
      case 'OPTIONS': return await handleOptionsRequest(req, res)
      case 'POST': return await handlePostRequest(req, res)
      default: res.status(405).end()
    }
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
}

function handleOptionsRequest (req, res) {
  res.set('Access-Control-Allow-Methods', 'POST')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.set('Access-Control-Max-Age', '3600')
  res.status(204).end()
}

async function handlePostRequest (req, res) {
  const {
    firstName,
    lastName,
    email,
    skills,
    remuneration,
    message,
    resume,
    recaptchaToken
  } = req.body

  const emailMessage = `
      New application received from Join Us form, Career page.

      - First name: ${firstName}
      - Last name: ${lastName}
      - Email: ${email}
      - Skills: ${skills}
      - Intended remuneration (monthly): ${remuneration}
      - About me: ${message}
      - Resume: ${resume}
  `

  const applicantDetails = `
    - Skills: ${skills}
    - Intended remuneration (monthly): ${remuneration}
    - About me: ${message}
    - Resume: ${resume}
  `

  const data = {
    personalizations: [{
      to: [{ email: CONTACT_FORM_DESTINATION_EMAIL }],
      subject: 'New application from WeDevelop site'
    }],
    from: { email: CONTACT_FORM_DESTINATION_EMAIL },
    content: [{
      type: 'text/plain',
      value: emailMessage
    }]
  }

  if (!await isReCAPTCHATokenValid(recaptchaToken)) {
    return res.status(403).end()
  }

  await sendEmail(data)

  const applicant = await addApplicantToMailchimp({
    listId: MAILCHIMP_DEFAULT_LIST_ID,
    applicant: {
      email: email,
      firstName: firstName,
      lastName: lastName
    }
  })

  await addDetailsToMailchimpApplicant({
    listId: MAILCHIMP_DEFAULT_LIST_ID,
    applicantId: applicant.id,
    note: applicantDetails
  })

  await addDataToFirestore({
    firstName: firstName,
    lastName: lastName,
    email: email,
    skills: skills,
    remuneration: remuneration,
    message: message,
    resume: resume
  })

  return res.status(200).end()
}
