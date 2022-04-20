resource "google_secret_manager_secret" "cloud_functions_secrets" {
  secret_id = "${local.project_id}-cloud-functions"
  depends_on = [
    google_project_service.service["secretmanager.googleapis.com"]
  ]

  replication {
    automatic = true
  }
}