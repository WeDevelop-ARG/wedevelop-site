const functions = require('firebase-functions')

const processCalendlyEventInvitee = require('./controllers/processCalendlyEventInvitee')

exports.processCalendlyEventInvitee = functions.https.onRequest(processCalendlyEventInvitee)
