const {
  addSubscriberToMailchimp,
  addNoteToMailchimpSubscriber
} = require('../services/mailchimp')
const { addDataToFirestore } = require('../services/firestore')
const { isReCAPTCHATokenValid } = require('../services/recaptcha')
const { sendEmail } = require('../services/sendEmail')

const { MAILCHIMP_CAREER_LIST_ID, CAREER_FORM_DESTINATION_EMAILS } = require('../constants')
const { getDownloadURLForPath } = require('../services/storage')

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
    country,
    remuneration,
    message,
    resume: resumePath,
    recaptchaToken
  } = req.body

  if (!await isReCAPTCHATokenValid(recaptchaToken)) {
    return res.status(403).end()
  }

  let resume = resumePath
  try {
    resume = await getDownloadURLForPath(resumePath)
  } catch (err) {
    console.error('Could not get Download URL for path', resumePath)
  }

  const applicantDetails = `
    - Skills: ${skills}
    - Country: ${country}
    - Intended remuneration (monthly): ${remuneration}
    - About me: ${message}
    - Resume: ${resume}
  `

  const emailMessage = `
    New application received from Join Us form, Career page.

    - First name: ${firstName}
    - Last name: ${lastName}
    - Email: ${email} ${applicantDetails}
  `

  const to = Array.isArray(CAREER_FORM_DESTINATION_EMAILS) ? CAREER_FORM_DESTINATION_EMAILS.map(email => ({ email })) : [CAREER_FORM_DESTINATION_EMAILS]

  const data = {
    personalizations: [{
      to,
      subject: 'New application from WeDevelop site'
    }],
    from: to[0],
    content: [{
      type: 'text/plain',
      value: emailMessage
    }]
  }

  console.log('CAREER_FORM_SUBMIT', JSON.stringify(data))

  await sendEmail(data)

  const applicant = await addSubscriberToMailchimp({
    listId: MAILCHIMP_CAREER_LIST_ID,
    subscriber: {
      email: email,
      firstName: firstName,
      lastName: lastName
    }
  })

  await addNoteToMailchimpSubscriber({
    listId: MAILCHIMP_CAREER_LIST_ID,
    subscriberId: applicant.id,
    note: applicantDetails
  })

  await addDataToFirestore({
    firstName: firstName,
    lastName: lastName,
    email: email,
    skills: skills,
    country: country,
    remuneration: remuneration,
    message: message,
    resume: resume
  })

  return res.status(200).end()
}
