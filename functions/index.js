const functions = require('firebase-functions')

const processCalendlyEventInvitee = require('./controllers/processCalendlyEventInvitee')
const processStaffAugmentationFormSubmit = require('./controllers/processStaffAugmentationFormSubmit')
const processCareerFormSubmit = require('./controllers/processCareerFormSubmit')
const processInitialLandingContactForm = require('./controllers/processInitialLandingContactForm')
const processFollowUpContactForm = require('./controllers/processFollowUpContactForm')

exports.processCalendlyEventInvitee = functions.https.onRequest(processCalendlyEventInvitee)
exports.processStaffAugmentationFormSubmit = functions.https.onRequest(processStaffAugmentationFormSubmit)
exports.processCareerFormSubmit = functions.https.onRequest(processCareerFormSubmit)
exports.processInitialLandingContactForm = functions.https.onRequest(processInitialLandingContactForm)
exports.processFollowUpContactForm = functions.https.onRequest(processFollowUpContactForm)
