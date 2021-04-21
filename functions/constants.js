const functions = require('firebase-functions')
const config = functions.config()

exports.CALENDLY_ACCESS_TOKEN = config.calendly.accessToken
exports.CALENDLY_API_BASE_URL = config.calendly.baseURL || 'https://api.calendly.com/'

exports.MAILCHIMP_API_KEY = config.mailchimp.apiKey
exports.MAILCHIMP_SERVER = config.mailchimp.server
exports.MAILCHIMP_DEFAULT_LIST_ID = config.mailchimp.defaultListId
