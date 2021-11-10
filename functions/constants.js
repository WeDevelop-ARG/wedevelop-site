const functions = require('firebase-functions')
const config = functions.config()

exports.CALENDLY_ACCESS_TOKEN = config.calendly.access_token
exports.CALENDLY_API_BASE_URL = config.calendly.base_url || 'https://api.calendly.com/'

exports.MAILCHIMP_API_KEY = config.mailchimp.api_key
exports.MAILCHIMP_SERVER = config.mailchimp.server
exports.MAILCHIMP_DEFAULT_LIST_ID = config.mailchimp.default_list_id
exports.MAILCHIMP_CAREER_LIST_ID = config.mailchimp.career_list_id

exports.SENDGRID_API_KEY = config.sendgrid.api_key
exports.CONTACT_FORM_DESTINATION_EMAIL = config.contact_form.destination_email

exports.RECAPTCHA_SECRET_KEY = config.recaptcha.secret_key

exports.HUBSPOT_API_KEY = config.hubspot.api_key
exports.HUBSPOT_LANDING_DEAL_PIPELINE_NAME = config.hubspot.landing_deal_pipeline_name
exports.HUBSPOT_LANDING_DEAL_PIPELINE_STAGE = config.hubspot.landing_deal_pipeline_stage
