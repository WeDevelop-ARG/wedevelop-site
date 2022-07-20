module.exports.ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT || 'development'
module.exports.BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
module.exports.PROCESS_CALENDLY_EVENT_INVITEE_ENDPOINT_URL = (
  process.env.NEXT_PUBLIC_CALENDLY_EVENT_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/processCalendlyEventInvitee'
)
module.exports.INITIAL_LANDING_FORM_PROCESSOR_URL = (
  process.env.NEXT_PUBLIC_INITIAL_LANDING_FORM_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/processInitialLandingContactForm'
)
module.exports.FOLLOW_UP_CONTACT_PROCESSOR_URL = (
  process.env.NEXT_PUBLIC_STAFF_FOLLOW_UP_CONTACT_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/getFollowUpContact'
)
module.exports.FOLLOW_UP_FORM_PROCESSOR_URL = (
  process.env.NEXT_PUBLIC_FOLLOW_UP_FORM_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/processFollowUpContactForm'
)
module.exports.CAREER_FORM_PROCESSOR_URL = (
  process.env.NEXT_PUBLIC_CAREER_FORM_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/processCareerFormSubmit'
)
module.exports.CALENDLY_DEFAULT_EVENT_URL = process.env.NEXT_PUBLIC_CALENDLY_DEFAULT_EVENT_URL
module.exports.IS_DEVELOPMENT = module.exports.ENVIRONMENT === 'development'
module.exports.IS_TESTING = module.exports.ENVIRONMENT === 'testing'
module.exports.IS_PRODUCTION = module.exports.ENVIRONMENT === 'production'
module.exports.RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
module.exports.LANDING_FREE_QUOTE_HUBSPOT_FORM_REGION = process.env.NEXT_PUBLIC_LANDING_FREE_QUOTE_HUBSPOT_FORM_REGION
module.exports.LANDING_FREE_QUOTE_HUBSPOT_FORM_PORTAL_ID = process.env.NEXT_PUBLIC_LANDING_FREE_QUOTE_HUBSPOT_FORM_PORTAL_ID
module.exports.LANDING_FREE_QUOTE_HUBSPOT_FORM_FORM_ID = process.env.NEXT_PUBLIC_LANDING_FREE_QUOTE_HUBSPOT_FORM_FORM_ID
module.exports.LANDING_CAREERS_HUBSPOT_FORM_FORM_ID = process.env.NEXT_PUBLIC_LANDING_CAREERS_HUBSPOT_FORM_FORM_ID
