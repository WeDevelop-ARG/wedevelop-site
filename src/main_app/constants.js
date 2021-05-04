export const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || 'development'
export const BASE_URL = process.env.REACT_APP_BASE_URL
export const PROCESS_CALENDLY_EVENT_INVITEE_ENDPOINT_URL = (
  process.env.REACT_APP_CALENDLY_EVENT_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/processCalendlyEventInvitee'
)
export const STAFF_AUGMENTATION_FORM_PROCESSOR_URL = (
  process.env.REACT_APP_STAFF_AUGMENTATION_FORM_PROCESSOR_URL ||
  'http://localhost:5001/wedevelop-site/us-central1/processStaffAugmentationFormSubmit'
)
export const CONTACT_FORM_DESTINATION_EMAIL = process.env.REACT_APP_CONTACT_FORM_DESTINATION_EMAIL
export const CALENDLY_DEFAULT_EVENT_URL = process.env.REACT_APP_CALENDLY_DEFAULT_EVENT_URL
export const IS_DEVELOPMENT = ENVIRONMENT === 'development'
export const IS_TESTING = ENVIRONMENT === 'testing'
export const IS_PRODUCTION = ENVIRONMENT === 'production'
export const IS_STATIC_RENDERER = navigator.userAgent === 'ReactSnap'
export const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY
