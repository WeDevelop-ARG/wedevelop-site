export const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || 'development'
export const BASE_URL = process.env.REACT_APP_BASE_URL
export const PROCESS_CALENDLY_EVENT_INVITEE_ENDPOINT_URL = (
  process.env.REACT_APP_CALENDLY_EVENT_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/processCalendlyEventInvitee'
)
export const INITIAL_LANDING_FORM_PROCESSOR_URL = (
  process.env.REACT_APP_INITIAL_LANDING_FORM_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/processInitialLandingContactForm'
)
export const FOLLOW_UP_CONTACT_PROCESSOR_URL = (
  process.env.REACT_APP_STAFF_FOLLOW_UP_CONTACT_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/getFollowUpContact'
)
export const FOLLOW_UP_FORM_PROCESSOR_URL = (
  process.env.REACT_APP_FOLLOW_UP_FORM_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/processFollowUpContactForm'
)
export const CAREER_FORM_PROCESSOR_URL = (
  process.env.REACT_APP_CAREER_FORM_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/processCareerFormSubmit'
)
export const CALENDLY_DEFAULT_EVENT_URL = process.env.REACT_APP_CALENDLY_DEFAULT_EVENT_URL
export const IS_DEVELOPMENT = ENVIRONMENT === 'development'
export const IS_TESTING = ENVIRONMENT === 'testing'
export const IS_PRODUCTION = ENVIRONMENT === 'production'
export const IS_STATIC_RENDERER = navigator.userAgent === 'ReactSnap'
export const IS_PREVIEW_BUILD = !!process.env.REACT_APP_PREVIEW_BUILD
export const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY
export const LANDING_FREE_QUOTE_HUBSPOT_FORM_REGION = process.env.REACT_APP_LANDING_FREE_QUOTE_HUBSPOT_FORM_REGION
export const LANDING_FREE_QUOTE_HUBSPOT_FORM_PORTAL_ID = process.env.REACT_APP_LANDING_FREE_QUOTE_HUBSPOT_FORM_PORTAL_ID
export const LANDING_FREE_QUOTE_HUBSPOT_FORM_FORM_ID = process.env.REACT_APP_LANDING_FREE_QUOTE_HUBSPOT_FORM_FORM_ID
