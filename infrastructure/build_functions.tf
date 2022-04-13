resource "google_cloudbuild_trigger" "deploy_functions_from_github" {
  name        = "github-functions"
  description = "When the \"${local.github_branch_name}\" branch changes on GitHub, the cloud functions are built and deployed Firebase Functions"
  project     = local.project_id
  filename    = "infrastructure/functions/cloudbuild.yaml"
  ignored_files  = []
  included_files  = ["functions/**","infrastructure/functions"]
  tags = []
  depends_on = [
    google_project_iam_member.cloudbuild["roles/iam.serviceAccountUser"],
    google_project_iam_member.cloudbuild["roles/cloudbuild.builds.builder"],
    google_project_iam_member.cloudbuild["roles/serviceusage.apiKeysAdmin"],
    google_project_service.service["cloudbuild.googleapis.com"],
    google_project_service.service["firebase.googleapis.com"],
    google_project_service.service["cloudfunctions.googleapis.com"]
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
    _LOGS_BUCKET = google_storage_bucket.build_logs.url
  }
}
