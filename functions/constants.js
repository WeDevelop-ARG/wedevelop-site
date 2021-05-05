const functions = require('firebase-functions')
const config = functions.config()

exports.CALENDLY_ACCESS_TOKEN = config.calendly.access_token
exports.CALENDLY_API_BASE_URL = config.calendly.base_url || 'https://api.calendly.com/'

exports.MAILCHIMP_API_KEY = config.mailchimp.api_key
exports.MAILCHIMP_SERVER = config.mailchimp.server
exports.MAILCHIMP_DEFAULT_LIST_ID = config.mailchimp.default_list_id

exports.SENDGRID_API_KEY = config.sendgrid.api_key
exports.CONTACT_FORM_DESTINATION_EMAIL = config.contact_form_destination_email

exports.RECAPTCHA_SECRET_KEY = config.recaptcha.secret_key
