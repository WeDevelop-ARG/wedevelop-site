exports.error = function logError (err, ...args) {
  console.error(
    JSON.stringify({
      severity: 'ERROR',
      message: err.message,
      stack: err.stack,
      err,
      args
    })
  )
}

exports.warning = function logWarning (err, ...args) {
  console.error(
    JSON.stringify({
      severity: 'WARNING',
      message: err.message,
      stack: err.stack,
      err,
      args
    })
  )
}

function log (logger, ...args) {
  logger(
    JSON.stringify({
      severity: getSeverityFromLogger(logger),
      message: err.message,
      stack: err.stack,
      err,
      args
    })
  )
}

function getSeverityFromLogger (logger) {
  switch (logger) {
    case console.debug: return 'DEBUG'
    case console.info: return 'INFO'
    case console.log: return 'NOTICE'
    case console.warn: return 'WARNING'
    case console.error: return 'ERROR'
  }
}
