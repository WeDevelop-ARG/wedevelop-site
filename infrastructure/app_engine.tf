resource "google_app_engine_application" "app" {
  project     = local.project_id
  location_id = var.region_app
  database_type = "CLOUD_FIRESTORE"
}
