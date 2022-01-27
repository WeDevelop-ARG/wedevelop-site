resource "google_cloudbuild_trigger" "deploy_frontend_from_github" {
  name        = "github-frontend"
  description = "When the \"${local.github_branch_name}\" branch changes on GitHub, the frontend is built and deployed both to Firebase Hosting & Cloud Run"
  project     = local.project_id
  filename    = "infrastructure/frontend/cloudbuild.yaml"
  ignored_files  = ["functions/**","firestore/**"]
  included_files = []
  tags = []
  depends_on = [
    google_project_iam_member.cloudbuild["roles/iam.serviceAccountUser"],
    google_project_iam_member.cloudbuild["roles/cloudbuild.builds.builder"],
    google_project_iam_member.cloudbuild["roles/firebase.admin"],
    google_project_iam_member.cloudbuild["roles/serviceusage.apiKeysAdmin"],
    google_project_service.service["cloudbuild.googleapis.com"],
    google_project_service.service["containerregistry.googleapis.com"],
    google_project_service.service["cloudresourcemanager.googleapis.com"]
  ]

  github {
    owner = "WeDevelop-ARG"
    name  = "wedevelop-site"

    push {
      branch = "^${local.github_branch_name}$"
    }
  }

  substitutions = {
    _ENVIRONMENT = local.environment
    _LOGS_BUCKET                   = google_storage_bucket.build_logs.url
    _BASE_DOMAIN_NAME              = local.environment_domain_name
    _FRONTEND_CLOUD_RUN_SERVICE_ID = local.frontend_cloud_run_service_id
    _FRONTEND_CLOUD_RUN_REGION     = var.region
    _FIREBASE_API_KEY              = local.firebaseConfig.apiKey
    _FIREBASE_AUTH_DOMAIN          = local.environment_domain_name
    _FIREBASE_DATABASE_URL         = local.firebaseConfig.databaseURL
    _FIREBASE_PROJECT_ID           = local.project_id
    _FIREBASE_STORAGE_BUCKET       = local.firebaseConfig.storageBucket
    _FIREBASE_MESSAGING_SENDER_ID  = local.firebaseConfig.messagingSenderId
    _FIREBASE_APP_ID               = local.firebaseConfig.appId
    _FIREBASE_MEASUREMENT_ID       = local.firebaseConfig.measurementId
  }
}
