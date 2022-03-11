resource "google_storage_bucket" "build_logs" {
  project                     = local.project_id
  name                        = "${local.project_id}-build-logs"
  uniform_bucket_level_access = true
  labels                      = {}
}
