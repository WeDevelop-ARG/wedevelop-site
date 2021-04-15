export const MAILER_URL = process.env.REACT_APP_MAILER_URL || 'http://localhost:3000/send'
export const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || 'development'
export const BASE_URL = process.env.REACT_APP_BASE_URL
export const IS_DEVELOPMENT = ENVIRONMENT === 'development'
export const IS_TESTING = ENVIRONMENT === 'testing'
export const IS_PRODUCTION = ENVIRONMENT === 'production'
export const IS_STATIC_RENDERER = navigator.userAgent === 'ReactSnap'
