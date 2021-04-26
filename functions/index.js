const functions = require('firebase-functions')

const processCalendlyEventInvitee = require('./controllers/processCalendlyEventInvitee')
const processStaffAugmentationFormSubmit = require('./controllers/processStaffAugmentationFormSubmit')

exports.processCalendlyEventInvitee = functions.https.onRequest(processCalendlyEventInvitee)
exports.processStaffAugmentationFormSubmit = functions.https.onRequest(processStaffAugmentationFormSubmit)
