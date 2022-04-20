resource "google_secret_manager_secret" "cloud_functions_secrets" {
  secret_id = "${local.project_id}-cloud-functions"
  depends_on = [
    google_project_service.service["secretmanager.googleapis.com"]
  ]

  replication {
    automatic = true
  }
}

data "google_secret_manager_secret" "cloud_functions_secrets" {
  depends_on = [
    google_project_service.service["secretmanager.googleapis.com"]
  ]
  secret_id = "${local.project_id}-cloud-functions"
}

data "google_secret_manager_secret_version" "cloud_functions_secrets" {
  secret = data.google_secret_manager_secret.cloud_functions_secrets.secret_id
  version = "latest"
}