resource "google_firebase_web_app" "default" {
  provider     = google-beta
  project      = local.project_id
  display_name = "WeDevelop Site"
}

data "google_firebase_web_app_config" "default" {
  provider   = google-beta
  web_app_id = google_firebase_web_app.default.app_id
}

locals {
  firebaseConfig = {
    appId             = google_firebase_web_app.default.app_id
    apiKey            = data.google_firebase_web_app_config.default.api_key
    authDomain        = data.google_firebase_web_app_config.default.auth_domain
    databaseURL       = lookup(data.google_firebase_web_app_config.default, "database_url", "")
    storageBucket     = lookup(data.google_firebase_web_app_config.default, "storage_bucket", "")
    messagingSenderId = lookup(data.google_firebase_web_app_config.default, "messaging_sender_id", "")
    measurementId     = lookup(data.google_firebase_web_app_config.default, "measurement_id", "")
  }
}
