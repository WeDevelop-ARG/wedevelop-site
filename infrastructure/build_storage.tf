resource "google_cloudbuild_trigger" "deploy_storage_from_github" {
  name        = "github-storage"
  description = "When the \"${local.github_branch_name}\" branch changes on GitHub, the Cloud storage configuration is updated"
  project     = local.project_id
  filename    = "infrastructure/storage/cloudbuild.yaml"
  ignored_files  = []
  included_files = ["storage/**", "infrastructure/storage/**","infrastructure/build_storage"]
  tags = []
  depends_on = [
    google_project_iam_member.cloudbuild["roles/iam.serviceAccountUser"],
    google_project_iam_member.cloudbuild["roles/cloudbuild.builds.builder"],
    google_project_iam_member.cloudbuild["roles/serviceusage.apiKeysAdmin"],
    google_project_service.service["firebase.googleapis.com"],
    google_app_engine_application.app
  ]

  github {
    owner = "WeDevelop-ARG"
    name  = "wedevelop-site"

    push {
      branch = "^${local.github_branch_name}$"
    }
  }

  substitutions = {
    _LOGS_BUCKET                   = google_storage_bucket.build_logs.url
  }
}
