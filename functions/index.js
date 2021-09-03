const functions = require('firebase-functions')

const processCalendlyEventInvitee = require('./controllers/processCalendlyEventInvitee')
const processStaffAugmentationFormSubmit = require('./controllers/processStaffAugmentationFormSubmit')
const processCareerFormSubmit = require('./controllers/processCareerFormSubmit')

exports.processCalendlyEventInvitee = functions.https.onRequest(processCalendlyEventInvitee)
exports.processStaffAugmentationFormSubmit = functions.https.onRequest(processStaffAugmentationFormSubmit)
exports.processCareerFormSubmit = functions.https.onRequest(processCareerFormSubmit)
