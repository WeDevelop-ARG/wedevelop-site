const functions = require('firebase-functions')
const config = functions.config()

exports.CALENDLY_API_BASE_URL = config.calendly.base_url || 'https://api.calendly.com/'
exports.MAILCHIMP_SERVER = config.mailchimp.server
exports.MAILCHIMP_DEFAULT_LIST_ID = config.mailchimp.default_list_id
exports.MAILCHIMP_CAREER_LIST_ID = config.mailchimp.career_list_id

exports.CONTACT_FORM_DESTINATION_EMAIL = config.contact_form.destination_email
exports.CAREER_FORM_DESTINATION_EMAILS = config.career_form.destination_emails

exports.HUBSPOT_LANDING_DEAL_PIPELINE_NAME = config.hubspot.landing_deal_pipeline_name
exports.HUBSPOT_LANDING_DEAL_PIPELINE_STAGE = config.hubspot.landing_deal_pipeline_stage

exports.BLOG_NEWSLETTER_ID = config.hubspot.blog_newsletter_id
exports.GCP_SECRET_ID = `projects/${process.env.GCP_PROJECT}/secrets/${process.env.GCP_PROJECT}-cloud-functions`
